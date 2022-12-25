import React, { FunctionComponentElement, ReactElement, useState } from "react"
import styles from "./style.module.css";

type ConfirmPopupType = {
  trigger: ReactElement<any, any>
  title?: string | ReactElement<any, any>
  text?: string | ReactElement<any, any>
  confirmText?: string | ReactElement<any, any>
  onConfirmClicked?: () => any
  cancelText?: string | ReactElement<any, any>
  onCancelClicked?: () => any
}

const ReactConfirmPopup = ({
  trigger,
  title = "Are you sure?",
  text = "",
  confirmText = "Confirm",
  onConfirmClicked = () => null,
  cancelText = "Cancel",
  onCancelClicked = () => null,
}: ConfirmPopupType) => {
  const [show, setShow] = useState(false)

  const handleOnTriggerClick = () => {
    document.body.classList.add('confirm-popup-body');
    setShow(true)
  }

  const handleOnCancelClicked = () => {
    document.body.classList.remove('confirm-popup-body');
    setShow(false)
    onCancelClicked()
  }

  const handleOnConfirmClicked = () => {
    setShow(false)
    onConfirmClicked()
  }

  const clonedTrigger = React.cloneElement(trigger, { onClick: handleOnTriggerClick })

  let clonedCancelText: FunctionComponentElement<any> | null = null
  if (typeof cancelText === "object") {
    clonedCancelText = React.cloneElement(cancelText, { onClick: handleOnCancelClicked })
  }

  let clonedConfirmText: FunctionComponentElement<any> | null = null
  if (typeof confirmText === "object") {
    clonedConfirmText = React.cloneElement(confirmText, { onClick: handleOnConfirmClicked })
  }

  if (show) {
    return <>
      {clonedTrigger}
      <div className={styles.confirmPopupOverlay}>
        <div className={styles.confirmPopupContainer}>
          <div className={styles.confirmPopupTitle}>{title}</div>
          <div className={styles.confirmPopupText}>{text}</div>
          <div className={styles.confirmPopupActions}>
            {clonedConfirmText ? clonedConfirmText : <button className={styles.confirmPopupConfirmButton} onClick={handleOnConfirmClicked}>{confirmText}</button>}
            {clonedCancelText ? clonedCancelText : <button className={styles.confirmPopupCancelButton} onClick={handleOnCancelClicked}>{cancelText}</button>}
          </div>
        </div>
      </div>
    </>
  }

  return clonedTrigger

};

export default ReactConfirmPopup;
