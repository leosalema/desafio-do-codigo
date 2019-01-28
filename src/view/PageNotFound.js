import React from 'react'
import Robot from '../images/broken_robot.jpg'

export default props => (
    <center>
        <h1>Página não encontrada</h1>
        <p>Este endereço não chega a lugar nenhum...</p>
        <p>...acho que devemos considerar isso um grande problema.</p>
        <img src={Robot} />
    </center>
)