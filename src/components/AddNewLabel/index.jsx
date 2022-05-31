import React, {useState} from "react";

import { SketchPicker } from "react-color";
import styles from "./styles.module.scss";

const AddNewLabel = ({close}) => {
    const [labelName, setLabelName] = useState('');
    const [color, setColor] = useState('fff');
    const handleChangeLabelName = e => {
        setLabelName(e.target.value);
    }
    const handleChangeColor = (color) => {
        setColor(color.hex);
    }

    const handleSubmit = () => {
        if(!labelName === ''){
            //request API call
            console.log(labelName,color);
        }else{
            console.log('fail to create new label');
        }
    }

    return (
        <div className={styles.layer}>
            <div className={styles.form}>
                <h4>Add new label</h4>
                <input 
                    type="text" 
                    placeholder="Name"
                    value={labelName}
                    onChange={handleChangeLabelName}
                />
                <h4>Color</h4>
                <SketchPicker color={color} width="260px" onChange={handleChangeColor}/>
                <div className={styles.group}>
                    <button onClick={close} style={{backgroundColor: '#ff0000'}}>Cancel</button>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default AddNewLabel;
