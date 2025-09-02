"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"


export default function Login(){
    function imprimir(){
        console.log("hola")
    }

    function imprimirHola(){
        console.log("tocaste el boton")
    }

    return (
    <>
        <h1>aaa</h1>
        <Button texto="hola" onClick={imprimirHola}></Button>
        <Input onChange={imprimir}></Input>
    </>
)
}

