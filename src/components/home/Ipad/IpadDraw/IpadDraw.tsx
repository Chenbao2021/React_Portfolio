import React, { useRef, useEffect, useState } from 'react'
import { mouton } from '../../../../assets/images/ipad/ipadMain';
import './IpadDraw.css'
interface ipadDrawProps {
    goToMenu: (title: string) => void
}

function IpadDraw(props: ipadDrawProps) {
    const canvasRef = useRef(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        if(canvasRef.current !== null){
            const canvas: HTMLCanvasElement = canvasRef.current
            canvas.width = 0.6 * window.innerWidth ;
            canvas.height = 0.8 * window.innerHeight;

            canvas.style.backgroundColor = 'white';
            canvas.style.marginLeft = '2vh';
            canvas.style.cursor = 'https://w7.pngwing.com/pngs/72/184/png-transparent-cursor-pens-computer-icons-pen-tool-angle-pencil-rectangle.png'
            const context = canvas.getContext("2d")
            if(context !== null){
                context.lineCap = "round"
                context.strokeStyle = "black"
                context.lineWidth = 10
                contextRef.current = context 
            }
        }
    }, [])

    const startDrawing = ({nativeEvent}: any) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current!.beginPath()
        contextRef.current!.moveTo(offsetX, offsetY)

        setIsDrawing(true)
    }

    const finishDrawing = () => {
        contextRef.current!.closePath()
        setIsDrawing(false)
    }
    const draw = ({nativeEvent}: any) => {
        if(!isDrawing) return
        const {offsetX, offsetY} = nativeEvent;

        contextRef.current!.lineTo(offsetX, offsetY)
        contextRef.current!.stroke();
    }
    return (
        <div className="IpadDraw-box">
            <h1> Dessines moi un mouton !</h1>
            <div className='IpadDraw-description'>
                <p>👇C'est un mouton</p>
                <img src={mouton}  className='IpadDraw-mouton'/>
            </div>
            <canvas
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
                className='IpadDraw-canvas'
            />
        </div>
    );
}

export default IpadDraw