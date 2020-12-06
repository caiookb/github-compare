import React, { useState } from "react";
import ClayModal, { useModal } from "@clayui/modal";
import ClayButton from "@clayui/button";
import Icon from "../Icon/Icon";

const DeleteRepositoryComponent = (props) => {
  const { onClose, repository, onClickFunction } = props;
  return (
    <>
      <ClayModal.Header style={{ padding: 0 }}>
        <Icon icon={"warning-full"} color={"#B95000"} />
        <span style={{ marginLeft: 10 }}>{"Delete repository"}</span>
      </ClayModal.Header>
      <ClayModal.Body>
        Are you sure to delete the {repository.name} repository?
      </ClayModal.Body>
      <ClayModal.Footer
        last={
          <ClayButton.Group spaced>
            <ClayButton displayType="secondary" onClick={() => onClose()}>
              {"Cancel"}
            </ClayButton>
            <ClayButton
              onClick={() => {
                onClickFunction(repository);
                onClose();
              }}
              displayType="warning"
            >
              {"Delete"}
            </ClayButton>
          </ClayButton.Group>
        }
      />
    </>
  );
};

const Modal = (props) => {
  const { icon, color, item } = props;
  const [visible, setVisible] = useState(false);
  const { observer, onClose } = useModal({
    onClose: () => setVisible(false),
  });

  return (
    <>
      {visible && (
        <ClayModal
          className={`modal-${color}`}
          observer={observer}
          size="md"
          status="info"
        >
          <DeleteRepositoryComponent
            onClose={onClose}
            repository={item}
            {...props}
          />
        </ClayModal>
      )}
      <Icon icon={icon} onClick={() => setVisible(true)} />
    </>
  );
};

export default Modal;
