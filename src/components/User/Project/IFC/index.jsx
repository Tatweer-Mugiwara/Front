import { useEffect } from "react";
import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

const IFC = () => {
    useEffect(() => {
        const container = document.getElementById("viewer-container");
        const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
        viewer.axes.setAxes();
        viewer.grid.setGrid();
        
        window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
        window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
        viewer.clipper.active = true;
        
        window.onkeydown = (event) => {
            if (event.code === "KeyP") {
                viewer.clipper.createPlane();
            } else if (event.code === "KeyO") {
                viewer.clipper.deletePlane();
            }
        };
    }, [])
    
    return (
        <div id="viewer-container"></div>
    )
}

export default IFC
