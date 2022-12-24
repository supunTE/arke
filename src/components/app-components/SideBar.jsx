import { IconAlignRight, IconCheck, IconClipboardCopy, IconCopy, IconX } from '@tabler/icons'
import React from 'react'
import useClipboard from 'react-hook-clipboard'
import { useArke } from '../utilities/Arke.Context'
import * as styles from "./styles/SideBar.module.scss"

const SideBar = () => {

    const {currentUser,arkeToasteer} = useArke()

    const [clipboard, copyToClipboard] = useClipboard()
    const toClipboard = `${window.location.origin}/join/${currentUser.roomId}`

  return (
    <>
        <div className={styles.Title}>
            <div className={styles.Logo}>
                <img src="/arke.svg" alt="Logo" />
            </div>
            <span>Welcome to Arkē</span>
            <button className={styles.OptionsBtn}>
                <IconAlignRight stroke={0.5} size={20} />
            </button>
        </div>
        <span className={styles.Label}>Display Name</span>
        <div className={styles.NameInput}>
            <input readOnly type="text" value={currentUser?currentUser.senderName : ""} placeholder={"John123"} disabled={true} />
            <div className={styles.icon}>
                <IconCheck stroke={0.5} size={20} />
            </div>
        </div>
        <div className={styles.RoomTitle}>
            Current Room: <span>{currentUser?currentUser.roomName : ""}</span>
        </div>
        <div className={styles.RoomInfo}>
            <div className={styles.disclaimer}>
                Invite people to join <span>{currentUser?currentUser.roomName : ""}</span>
            </div>
            <img src="https://i.ibb.co/jDnMLvK/qrcode.png" alt="QR Code" />
            <div className={styles.LinkCopy}>
            <span>{(`${window.location.origin}/join/${currentUser.roomId}`).substring(0,27)+"..."}</span>
            <div className={styles.icon} onClick={() => {
                copyToClipboard(toClipboard)
                arkeToasteer({
                    type: "success",
                    message: "Copied Link to Room"
                  })
            }}>
                <IconClipboardCopy stroke={1} size={20} />
            </div>
            </div>
            <div className={styles.instructionSection}>
                <div className={styles.instructionPoint}>
                    <div className={styles.bullet}>1</div>
                    <span className={styles.instructionLine}>You are inside a <b>disposable</b> chatroom. Nothing is saved. It's peer-to-peer.</span>
                </div>
                <div className={styles.instructionPoint}>
                    <div className={styles.bullet}>2</div>
                    <span className={styles.instructionLine}>Invite anyone to this chatroom by sharing the <b>QR Code</b> above or copying the invite link by clicking on the <b>button</b> next to the link.</span>
                </div>
                <div className={styles.instructionPoint}>
                    <div className={styles.bullet}>3</div>
                    <span className={styles.instructionLine}>Enjoy!</span>
                </div>
                </div>
                <button className={styles.closeButton}>
                    <IconX size={16} stroke={3} />
                    <span>Close Room</span>
                </button>
        </div>
    </>
  )
}

export default SideBar