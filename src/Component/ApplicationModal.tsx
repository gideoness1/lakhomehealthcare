import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Button from "./ui/Button.tsx";
import { IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import pdf from "../assets/pdf.svg";
import upload from "../assets/upload.svg";
import { useNavigate } from "react-router-dom";
import { useModal } from "../hooks/useModal.tsx";

const ApplicationModal = () => {
  const navigate = useNavigate();
  const { hideModal } = useModal();
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = () => {
    // Simulate successful submission
    setIsSubmitted(true);
  };

  const closeModal = () => {
    hideModal("showUploadFileModal");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60  backdrop-blur">
      <div className="w-[95%] md:w-[525px] bg-white rounded-lg shadow-lg p-4 md:p-[32px]">
        {!isSubmitted ? (
          <>
            <div className="flex items-center justify-between md:mb-2">
              <h2 className="text-[18px] md:text-[22px] leading-[32px] manrope-bold">
                Apply This Role
              </h2>
              <IoClose
                size={24}
                onClick={closeModal}
                className={`cursor-pointer`}
              />
            </div>
            <p className="text-gray text-[12px] md:text-[14px] manrope-regular md:w-[455px] mb-3 md:mb-4">
              Download the file below, fill the form and submit the filled
              document in the area provided below
            </p>

            <div className="mb-4">
              <h3 className="text-gray text-[14px] md:text-[16px] manrope-bold mb-[10px]">
                Download document
              </h3>
              <div className="flex items-center justify-between border border-[#C3D0DB] p-4 rounded-lg mb-4">
                <div className="flex items-center gap-x-[10px]">
                  <div>
                    <img src={pdf} alt="pdf_logo" />
                  </div>
                  <p className="manrope-bold text-[14px] leading-6 text-gray">
                    Lak Home Health Application Form
                  </p>
                </div>
                <FiDownload size={24} />
              </div>
              <div className="w-full h-[1px] bg-[#E7E7E7]"></div>
            </div>

            <div className="mb-4">
              <h2 className="block text-[14px] md:text-[16px] manrope-bold leading-6 text-gray mb-[10px]">
                Submit Application
              </h2>

              <p className="manrope-regular text-[12px] md:text-[14px] leading-6 text-gray mb-[10px]">
                Upload the filled document here
              </p>

              <div
                className="w-full md:h-[152px] flex-center border border-dashed border-[#9A1E23] rounded-lg mb-4 p-3 md:p-0"
                onDrop={handleFileDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className="flex flex-col items-center justify-center">
                  {file ? (
                    <div className="flex flex-col items-center gap-y-2">
                      <img
                        src={pdf}
                        alt="pdf_logo"
                        className="w-[50px] h-[50px]"
                      />
                      <p className="text-gray text-[12px] md:text-[14px] leading-6 manrope-bold truncate">
                        {file.name}
                      </p>
                      <label
                        htmlFor="file"
                        className="text-[#B22922] text-[12px] manrope-medium cursor-pointer"
                      >
                        or select file to upload
                      </label>
                    </div>
                  ) : (
                    <>
                      <img src={upload} alt="upload_logo" />
                      <p className="text-gray text-[14px] leading-6 manrope-bold">
                        Drag & drop{" "}
                      </p>
                      <label
                        htmlFor="file"
                        className="text-[#B22922] text-[12px] manrope-medium cursor-pointer"
                      >
                        or select file to upload
                      </label>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#E7E7E7] mb-4"></div>

            <div className="flex justify-end gap-x-3">
              <Button
                variant="default"
                className="!w-[120px] !border-[#0e5462] !text-[#0e5462] !rounded-[55px] !manrope-bold "
                onClick={closeModal}
              >
                CANCEL
              </Button>
              <Button
                variant="primary"
                className="!w-[120px] !bg-[#0e5462] !text-white !rounded-[55px] !manrope-bold"
                onClick={handleSubmit}
                disabled={!file}
              >
                SUBMIT
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-[45px] h-[45px] bg-[#00820E] flex justify-center items-center rounded-full mb-[23.5px]">
              <FaCheck className="text-white" />
            </div>
            <h2 className="text-[22px] leading-[32px] manrope-bold">Success</h2>
            <p className="text-[#4F4F4F] text-[14px] manrope-regular text-center md:w-[436px] mb-4">
              Your application for the{" "}
              <span className="manrope-bold">Nursing Home Assistant</span> role
              has been submitted successfully
            </p>
            <Button
              variant="primary"
              className="!bg-[#0e5462] !text-white !manrope-bold"
              onClick={() => navigate("/home")}
            >
              OKAY
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;
