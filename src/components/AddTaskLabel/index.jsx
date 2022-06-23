import React, {useState,useLayoutEffect} from "react";

import AddNewLabel from "../AddNewLabel";
import Label from "./Label";
import CloseIcon from '@mui/icons-material/Close';
import styles from "./style.module.scss";

const AddTaskLabel = ({close,labels, submitAdd, toggleSelectedLabel}) => {
    const [showAddNewLabel, setShowAddNewLabel] = useState(false);
    
    const handleOpenAddNewLabel = (e) => {
        e.preventDefault();
        setShowAddNewLabel(true);
    }

    return (
        <div className={styles.layer}>
            <div className={styles.box}>
                <div className={styles.header}>
                    <button onClick={handleOpenAddNewLabel}>Add new label</button>
                    <CloseIcon onClick={close}/>
                    {showAddNewLabel && <AddNewLabel close={()=>{setShowAddNewLabel(false)}}/>}
                </div> 
                <div className={styles.labelList}>
                    {labels.map((label)=>
                        <Label 
                            key={label.id}
                            label={label}
                            onClick={toggleSelectedLabel}
                        />
                    )}
                </div>
                <div className={styles.button}>
                    <button onClick={submitAdd}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskLabel;
