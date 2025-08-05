import { useState } from "react";
import { Navigate } from "react-router-dom";

const initialState = {
    boxSize: "",
    boxHolder: "",
}

const MailboxForm = (props) => {
    
    const [formData, setFormData] = useState(initialState);

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
  };
  
    const handleSubmit = (e) => {
        try{
            e.preventDefault();
            props.addMail(formData)
            setFormData(initialState);
            // Navigate('/');
            console.log(props.addMail(formData))
        } catch(error){
            console.log('Error HERE: ' + error.message)
        }
        
  };

    return (
        <main>
        <h2>New Mail</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxSize">Box Size:</label>
            <input
            type="text"
            id="boxSize"
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
            />
            <label htmlFor="boxHolder">Box Holder:</label>
            <input
            type="text"
            id="boxHolder"
            name="boxHolder"
            value={formData.boxHolder}
            onChange={handleChange}
            />
            
            <button type="submit">Submit</button>
        </form>
    </main>
  );
}

export default MailboxForm;