import React, { useState, useEffect } from 'react';
import PrimaryButton from '../../CommonComponents/PrimaryButton';
import citLogo from "../../../Images/cit_logo.png";
import SecondaryButton from '../../CommonComponents/SecondaryButton';
import { addNewFest, controlFest, getFest } from '../../../Redux/fest/festSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddFest = ({ user }) => {
    const [festName, setFestName] = useState('');
    const [festDescription, setFestDescription] = useState('');
    const [logo, setLogo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const {
        fest,
        loading: festLoading,
        error: festError,
        festStatus,
    } = useSelector((state) => ({
        ...state.fest
    }));


    useEffect(() => {
        dispatch(getFest());
    }, [dispatch, isModalOpen]);

    useEffect(() => {
        console.log("Modal state:", isModalOpen); // Debugging
    }, [isModalOpen]);

    const token = useSelector((state) => state.auth.token); // Assuming you store the token in Redux

    const festAddedError = useSelector((state) => state.fest.error); // Assuming you have an error state in your fest slice

    const handleFestSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(addNewFest({ festName, desc: festDescription, logo, token }));
        if (addNewFest.fulfilled.match(resultAction)) {
            alert('Fest created successfully!');
            setIsModalOpen(false);
        } else if (addNewFest.rejected.match(resultAction)) {
            alert(`Error: ${resultAction.payload}`);
            setIsModalOpen(false);
        }
    };


    const handleActivateFest = async () => {
        setLoading(true);
        try {
            const resultAction = await dispatch(controlFest({token})); // Dispatch the controlFest action
            if (controlFest.fulfilled.match(resultAction)) {
                alert('Fest activated successfully!');
            } else if (controlFest.rejected.match(resultAction)) {
                alert(`Error: ${resultAction.payload}`);
            }
        } catch (error) {
            alert('An error occurred while activating the fest.');
        }
        setLoading(false);
    };

    return (
        <>
            <div className='px-8 py-4 flex justify-between items-center'>
                <img
                    src={citLogo}
                    alt="Portrait of Dr. A.P.J. Abdul Kalam"
                    className="h-16 w-12 drop-shadow-lg"
                />
                <div>
                    <h1 className='font-semibold text-neutral-700 text-lg'>Hello, <span className='text-purple-600'>{user.name}</span></h1>
                </div>
            </div>

            <div className="pt-20 flex justify-center bg-gradient-to-b from-white to-white via-purple-300 min-h-screen">
                <div className='w-2/3 text-center'>
                    <h1 className="text-center font-bold text-5xl py-6 text-neutral-800 drop-shadow-lg">Build, Grow & Manage Your <span className='text-purple-600 drop-shadow-lg'>Festivals</span></h1>
                    <h2 className="text-center px-28 font-medium text-lg py-2 text-neutral-600">From crafting unforgettable experiences to scaling your events and streamlining operations—your journey to creating the ultimate technical festival starts here</h2>

                    <div className="mt-8 text-center flex justify-center space-x-4">
                        {fest === null ? (
                            <PrimaryButton
                                content="Create New Festival"
                                onClick={() => setIsModalOpen(true)}
                            />
                        ) : (
                            <PrimaryButton
                                content="Activate Fest"
                                onClick={handleActivateFest}
                            />
                        )}

                        {fest === null ? (
                            <SecondaryButton
                            content="Visit CIT_K"
                            onClick={() => window.open("https://www.cit.ac.in", "_blank")}
                        />
                        ) : (
                            <SecondaryButton
                            content="Edit Festival"
                            onClick={() => setIsModalOpen(true)}
                        />
                        )}

                        
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 md:w-1/3">
                            {/* Modal Header */}
                            <h2 className="text-2xl font-bold mb-6 text-purple-600 text-center">Create a New Festival</h2>

                            {/* Form */}
                            <form onSubmit={handleFestSubmit} className="space-y-6">
                                {/* Fest Name Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Fest Name</label>
                                    <input
                                        type="text"
                                        value={festName}
                                        onChange={(e) => setFestName(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        placeholder="Enter fest name"
                                        required
                                    />
                                </div>

                                {/* Fest Description Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Fest Description</label>
                                    <textarea
                                        value={festDescription}
                                        onChange={(e) => setFestDescription(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        rows="4"
                                        placeholder="Enter fest description"
                                        required
                                    />
                                </div>

                                {/* Fest Logo Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Fest Logo</label>
                                    <input
                                        type="file"
                                        onChange={(e) => setLogo(e.target.files[0])}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end space-x-4">
                                    {/* Cancel Button */}
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-6 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all"
                                    >
                                        Cancel
                                    </button>

                                    {/* Submit Button */}
                                    <PrimaryButton
                                        content={loading ? 'Adding...' : 'Add Fest'}
                                        type="submit"
                                        disabled={loading}
                                        className="px-6 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-all"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AddFest;