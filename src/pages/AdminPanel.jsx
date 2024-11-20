import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Modal, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPanel = () => {
  const { currentUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    username: '',
    email: '',
    nombre: '',
    apellido: '',
    password: '',
    role: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/');
    }
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, [currentUser, navigate]);

  const deleteUser = (username) => {
    const updatedUsers = users.filter((user) => user.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    toast.error(`Usuario ${username} eliminado exitosamente.`, { autoClose: 2000 });
  };

  const editUser = (user) => {
    setSelectedUser(user);
    setUpdatedUser(user);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    const updatedUsers = users.map((user) =>
      user.username === selectedUser.username ? updatedUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setShowModal(false);
    toast.success('Usuario actualizado correctamente.', { autoClose: 2000 });
  };

  const handleDeleteConfirmation = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const confirmDeleteUser = () => {
    deleteUser(selectedUser.username);
    setShowDeleteModal(false);
  };

  const columns = [
    { name: 'Username', selector: (row) => row.username, sortable: true },
    { name: 'Email', selector: (row) => row.email, sortable: true },
    { name: 'Nombre', selector: (row) => row.nombre, sortable: true },
    { name: 'Apellido', selector: (row) => row.apellido, sortable: true },
    { name: 'Role', selector: (row) => row.role, sortable: true },
    {
      name: 'Acciones',
      cell: (row) => (
        <>
          <button className="btn btn-warning me-2" onClick={() => editUser(row)}>
            Editar
          </button>
          <button className="btn btn-danger" onClick={() => handleDeleteConfirmation(row)}>
            Eliminar
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="container mt-5">
      <h1>Panel de Administración</h1>
      <DataTable
        title="Usuarios Registrados"
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        customStyles={{
          table: {
            style: {
              backgroundColor: 'white', // Fondo blanco para legibilidad
              color: '#333', // Texto oscuro para contraste
            },
          },
        }}
      />

      {/* Modal de edición */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                value={updatedUser.username}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={updatedUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
                value={updatedUser.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                className="form-control"
                value={updatedUser.apellido}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={updatedUser.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                id="role"
                name="role"
                className="form-control"
                value={updatedUser.role}
                onChange={handleInputChange}
              >
                <option value="cliente">Cliente</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de confirmación de eliminación */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de que quieres eliminar al usuario <b>{selectedUser?.username}</b>?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmDeleteUser}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default AdminPanel;
