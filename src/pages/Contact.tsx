import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaMusic, FaSnapchatGhost } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import foot from "../assets/about.jpg";

// Define types for the form state
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  selectedEmail: string;
}

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    selectedEmail: "yinoluu@yinoluu.com",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row pt-[0px] lg:pt-0 h-screen lg:mt-0 lg:min-h-screen justify-center items-center min-h-screen text-white w-full"
    >
      <div className="home-left flex-1 flex flex-col justify-center items-center text-center md:text-left p-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-12">
          I'd love to hear from you!
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-8">
          LET'S GET SOCIAL!
        </h2>
        <div className="flex gap-6 mb-12">
          <BsTwitter
            size={24}
            className="hover:text-[#b27d4a] transition-all cursor-pointer"
          />
          <BsInstagram
            size={24}
            className="hover:text-[#b27d4a] transition-all cursor-pointer"
          />
          <FaSnapchatGhost
            size={24}
            className="hover:text-[#b27d4a] transition-all cursor-pointer"
          />
          <FaMusic
            size={24}
            className="hover:text-[#b27d4a] transition-all cursor-pointer"
          />
        </div>

        <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-6">
          GET IN TOUCH
        </h2>

        {/* Button to open modal */}
        <button
          onClick={handleOpenModal}
          className="py-2 px-4 bg-[#b27d4a] text-white rounded-md hover:bg-[#a07a3d] transition-all"
        >
          Send a Message
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#222121] p-8 rounded-lg mx-4 max-w-lg w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-5 p-2 text-white bg-red-900 rounded-xl flex items-center justify-center text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Contact Us
            </h2>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full ">
              <div className="flex flex-col gap-4 mb-6">
                <label htmlFor="name" className="text-lg font-semibold text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-2 rounded-md bg-[#333] text-white"
                  required
                />
              </div>

              <div className="flex flex-col gap-4 mb-6">
                <label htmlFor="email" className="text-lg font-semibold text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-2 rounded-md bg-[#333] text-white"
                  required
                />
              </div>

              <div className="flex flex-col gap-4 mb-6">
                <label htmlFor="email-dropdown" className="text-lg font-semibold text-white">
                  Select Email
                </label>
                <select
                  id="selectedEmail"
                  value={formData.selectedEmail}
                  onChange={handleInputChange}
                  className="p-2 rounded-md bg-[#333] text-white"
                >
                  <option value="yinoluu@yinoluu.com">yinoluu@yinoluu.com</option>
                  <option value="kiishi@yinoluu.com">kiishi@yinoluu.com</option>
                  <option value="music@yinoluu.com">music@yinoluu.com</option>
                  <option value="writing@yinoluu.com">writing@yinoluu.com</option>
                  <option value="photography@yinoluu.com">photography@yinoluu.com</option>
                </select>
              </div>

              <div className="flex flex-col gap-4 mb-6">
                <label htmlFor="message" className="text-lg font-semibold text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="p-2 rounded-md bg-[#333] text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="py-2 px-4 bg-[#b27d4a] text-white rounded-md hover:bg-[#a07a3d] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Right Image */}
      <div className="home-right flex-1 justify-center items-center bg-cover bg-center lg:block hidden">
        <img
          src={foot}
          alt="Yino"
          className="w-full sm:w-4/5 md:w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Contact;
