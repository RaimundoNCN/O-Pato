import styled from "styled-components";

export const Container = styled.div`
    width: 95vw;
    height: 80%;
    padding: 8px;
    margin: 12px;
    display: flex;
    border-radius: 35px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 4px solid #D9D9D9; 
`
export const ContainerPerfil = styled.div`
    width: 260px;
    height: 70vh;
    margin: 15px;
    padding: 6px;
    display: flex;
    border-radius: 35px;
    align-items: center;
    flex-direction: column;
    background-color: #fbfffff2;
`

export const ImgPerfil = styled.img`
    width: 150px;
    height: 150px;
    display: flex;
    padding-top: 5px;
    border-radius: 50%;
    background-size: cover;
`

export const NamePerfil = styled.h1`
    color: #2f2d2d;
    display: flex;
    font-size: 4vmin, 5vmax;
    text-align: center;
    
`

export const Descriptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 70vh;
    background-color: #fbfffff2;
    margin: 15px;
    padding: 6px;
    border-radius: 35px;
    align-items: center;
`