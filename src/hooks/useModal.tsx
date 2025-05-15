import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
    showModal: (modalKey: string) => void;
    hideModal: (modalKey: string) => void;
    isModalActive: (modalKey: string) => boolean;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [modals, setModals] = useState<Record<string, boolean>>({});

    const showModal = (modalKey: string) => {
        setModals((prev) => ({ ...prev, [modalKey]: true }));
    };

    const hideModal = (modalKey: string) => {
        setModals((prev) => ({ ...prev, [modalKey]: false }));
    };

    const isModalActive = (modalKey: string) => !!modals[modalKey];

    return (
        <ModalContext.Provider value={{ showModal, hideModal, isModalActive }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
