// import React, { useContext } from 'react';
// import Modal from 'react-modal';
// import styles from './withForm.module.scss';
// import { AppContext } from '../AppContext';
// import Form from '../main/components/Form';


// Modal.setAppElement('#modal');

// function withForm({ Component }) {
  
//     function FormWrapper(props) {
      
//         const { toggleLoginForm } = useContext(AppContext)
        


//     return (
//       <>
//         <Component {...props}>
//           {props.children}
//         </Component>
//         <Modal 
//                 isOpen={toggleLoginForm}
//                 contentLabel="Form Modal"
//                 className={{ base: styles.content, afterOpen: styles.content_after_open, beforeClose: styles.content_before_close}}
//                 overlayClassName={{ base: styles.overlay, afterOpen: styles.overlay_after_open, beforeClose: styles.overlay_before_close }}
//             >
//                 <Form/>
//         </Modal>
//       </>
//     )
//   }

//   return FormWrapper
// }

// export default withForm