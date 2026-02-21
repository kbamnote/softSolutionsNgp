import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, MapPin, Edit2, Save, X, Briefcase, Users } from 'lucide-react';
import { ToastContainer, useToast } from '../components/Toast';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const { toasts, addToast, removeToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    occupation: '',
    address: {
      houseNumber: '',
      buildingName: '',
      street: '',
      area: '',
      landmark: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India',
    },
  });

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('/api/users/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setUser(data.user);
          setFormData({
            fullName: data.user.fullName || '',
            email: data.user.email || '',
            phone: data.user.phone || '',
            dob: data.user.dob || '',
            gender: data.user.gender || '',
            occupation: data.user.occupation || '',
            address: data.user.address || {
              houseNumber: '',
              buildingName: '',
              street: '',
              area: '',
              landmark: '',
              city: '',
              state: '',
              pincode: '',
              country: 'India',
            },
          });
        } else {
          addToast('Failed to fetch profile. Please login again.', 'error');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setTimeout(() => navigate('/login'), 1500);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        addToast('An error occurred while fetching your profile.', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        setEditing(false);
        addToast('Profile updated successfully!', 'success');
      } else {
        addToast(data.message || 'Failed to update profile.', 'error');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      addToast('An error occurred while updating your profile.', 'error');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-easilon-cyan mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <ToastContainer toasts={toasts} removeToast={removeToast} />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600">Please login to view your profile.</p>
            <button
              onClick={() => navigate('/login')}
              className="mt-4 bg-easilon-cyan text-white px-6 py-2 rounded-lg hover:bg-easilon-navy transition-colors"
            >
              Go to Login
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-easilon-cyan rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                {user.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-bold text-easilon-navy">{user.fullName}</h1>
                <p className="text-gray-500 capitalize text-sm sm:text-base">{user.role}</p>
              </div>
            </div>
            <button
              onClick={() => setEditing(!editing)}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                editing
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  : 'bg-easilon-cyan text-white hover:bg-easilon-navy'
              }`}
            >
              {editing ? <X size={18} /> : <Edit2 size={18} />}
              <span className="hidden sm:inline">{editing ? 'Cancel' : 'Edit Profile'}</span>
              <span className="sm:hidden">{editing ? 'Cancel' : 'Edit'}</span>
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-easilon-navy mb-6">Profile Information</h2>

          {editing ? (
            <form onSubmit={handleUpdate} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-easilon-navy mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineer"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-lg font-semibold text-easilon-navy mb-4">Address Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">House/Flat Number</label>
                    <input
                      type="text"
                      name="address.houseNumber"
                      value={formData.address.houseNumber}
                      onChange={handleChange}
                      placeholder="e.g. 101, A-Block"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Building/Apartment Name</label>
                    <input
                      type="text"
                      name="address.buildingName"
                      value={formData.address.buildingName}
                      onChange={handleChange}
                      placeholder="e.g. Sunrise Apartments"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street/Road</label>
                    <input
                      type="text"
                      name="address.street"
                      value={formData.address.street}
                      onChange={handleChange}
                      placeholder="e.g. Main Street"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area/Locality</label>
                    <input
                      type="text"
                      name="address.area"
                      value={formData.address.area}
                      onChange={handleChange}
                      placeholder="e.g. Koramangala"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Landmark</label>
                    <input
                      type="text"
                      name="address.landmark"
                      value={formData.address.landmark}
                      onChange={handleChange}
                      placeholder="e.g. Near City Mall"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="address.city"
                      value={formData.address.city}
                      onChange={handleChange}
                      placeholder="e.g. Bangalore"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      name="address.state"
                      value={formData.address.state}
                      onChange={handleChange}
                      placeholder="e.g. Karnataka"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                    <input
                      type="text"
                      name="address.pincode"
                      value={formData.address.pincode}
                      onChange={handleChange}
                      placeholder="e.g. 560001"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <input
                      type="text"
                      name="address.country"
                      value={formData.address.country}
                      onChange={handleChange}
                      placeholder="e.g. India"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-easilon-cyan"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-easilon-cyan text-white px-6 py-2 rounded-lg hover:bg-easilon-navy transition-colors"
                >
                  <Save size={18} /> Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Personal Information View */}
              <div>
                <h3 className="text-lg font-semibold text-easilon-navy mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <User className="text-easilon-cyan" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium text-easilon-navy">{user.fullName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-easilon-cyan" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-easilon-navy">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-easilon-cyan" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium text-easilon-navy">{user.phone || 'Not provided'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-easilon-cyan" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="font-medium text-easilon-navy">
                        {user.dob ? new Date(user.dob).toLocaleDateString() : 'Not provided'}
                      </p>
                    </div>
                  </div>
                  {user.gender && (
                    <div className="flex items-center gap-3">
                      <Users className="text-easilon-cyan" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Gender</p>
                        <p className="font-medium text-easilon-navy capitalize">{user.gender}</p>
                      </div>
                    </div>
                  )}
                  {user.occupation && (
                    <div className="flex items-center gap-3">
                      <Briefcase className="text-easilon-cyan" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Occupation</p>
                        <p className="font-medium text-easilon-navy">{user.occupation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Address Information View */}
              {user.address && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-easilon-navy mb-4 flex items-center gap-2">
                    <MapPin className="text-easilon-cyan" size={20} /> Address Details
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    {(user.address.houseNumber || user.address.buildingName) && (
                      <p className="text-gray-700">
                        <span className="font-medium">{user.address.houseNumber && `${user.address.houseNumber}, `}{user.address.buildingName}</span>
                      </p>
                    )}
                    {user.address.street && (
                      <p className="text-gray-700">{user.address.street}</p>
                    )}
                    {user.address.area && (
                      <p className="text-gray-700">{user.address.area}</p>
                    )}
                    {user.address.landmark && (
                      <p className="text-gray-500 text-sm">Landmark: {user.address.landmark}</p>
                    )}
                    <p className="text-gray-700">
                      {user.address.city && `${user.address.city}, `}
                      {user.address.state && `${user.address.state} `}
                      {user.address.pincode && `- ${user.address.pincode}`}
                    </p>
                    {user.address.country && (
                      <p className="text-gray-700 font-medium">{user.address.country}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default Profile;
