import React, {useState} from "react";

import { Navigate, useNavigate } from "react-router-dom";
import { SketchPicker } from "react-color";
import styles from "./style.module.scss";
import axios from "axios";

const AddNewLabel = ({close}) => {
    const navigate = useNavigate();
    const [labelName, setLabelName] = useState('');
    const [color, setColor] = useState('fff');
    const handleChangeLabelName = e => {
        setLabelName(e.target.value);
    }
    const handleChangeColor = (color) => {
        setColor(color.hex);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(labelName !== ''){
            await axios.post(`http://localhost:8000/labels`, ({
                "name": labelName,
                "color": color
            }))
            .then((res) => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })
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
