import createGlobe from "cobe";
import { useEffect, useRef } from "react";

import "./clients.css";

function Globe() {

    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;
        let width;
        let height;

        if (screen.width < 770) {
            width = 300 * 2;
            height = 300 * 2;
        }
        else {
            width = 500 * 2;
            height = 500 * 2;
        }

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width,
            height: height,
            phi: 1,
            theta: 0.0,
            dark: 0.0,
            diffuse: 1.0,
            mapSamples: 18000,
            mapBrightness: 100,
            opacity:0.86,
            baseColor: [0.08,0.02,0.22],
            markerColor:[.28,.32,.62],
            glowColor: [0.10, 0.023, 0.290],
            markers: [
                { location: [14.5995, 120.9842], size: 0.03 },
                { location: [19.076, 72.8777], size: 0.1 },
                { location: [23.8103, 90.4125], size: 0.05 },
                { location: [30.0444, 31.2357], size: 0.07 },
                { location: [39.9042, 116.4074], size: 0.08 },
                { location: [-23.5505, -46.6333], size: 0.1 },
                { location: [19.4326, -99.1332], size: 0.1 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [34.6937, 135.5022], size: 0.05 },
                { location: [41.0082, 28.9784], size: 0.06 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div className="Globe">
            <canvas
                ref={canvasRef}
            />
        </div>
    )
}

export default Globe