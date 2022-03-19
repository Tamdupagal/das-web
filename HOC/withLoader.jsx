import React, { useContext } from 'react';
import Modal from 'react-modal';
import ReactLoading from 'react-loading';
import styles from './withLoader.module.scss';
import { AppContext } from '../AppContext';


Modal.setAppElement('#modal');

function withLoader({ Component, type = "bars", options = { height: 70, width: 70, color: "#005778" } }) {
  
  function LoaderWrapper(props) {

    const {state: { lead, admin, leads}} = useContext(AppContext)

    return (
      <>
        <Component {...props}>
          {props.children}
        </Component>
        <Modal
                  isOpen={lead.isLoading || admin.isLoading || leads.isLoading}
                  contentLabel="Loader"
                  overlayClassName={{
                      base: styles.loader__overlay , afterOpen: styles.loader__overlay_after_open , beforeClose :  styles.loader__overlay_before_close}}
                  className={{ base: styles.loader__content, afterOpen: styles.loader__content_after_open, beforeClose: styles.loader__content_before_close }}
              >
                  <ReactLoading type={type} {...options} />
        </Modal>
      </>
    )
  }

  return LoaderWrapper
}

export default withLoader