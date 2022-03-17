import styled from "styled-components";
import React from "react";

export const Modal = (prop) => {
    return (
        <>{prop.showModal ? <div>modal</div> : null}</>
    )
}