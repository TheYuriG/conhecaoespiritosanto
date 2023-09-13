// Exporta um componente de um SVG do contorno do território do Espírito Santo. Permite customização de classes e a cor do contorno.
export function EsSvg(
  { stroke, classes }: { stroke: string; classes?: string },
) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="105 125 357 574" //+298
      class={classes}
      fill="none"
      stroke={stroke} // #0EA5D6
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      xmlSpace="preserve"
    >
      <g>
        <path d="M381.51,472.42c4.08,3.55,3.85,10.26-0.19,12.73c-3.59,2.19-3.93,4.29-2.7,8.17
		c2.15,6.79-1.76,12.97-3.55,19.23c-1.31,4.57-4.09,8.72-6.38,13.38c-4.08-1.82-7.34-1.05-8.22,3.15c-0.33,1.59,1.51,3.63,2.68,6.15
		c-6.67,6.83-7.6,17.59-11.56,27.03c-0.83,1.99-2,3.84-3.06,5.73c-2.43,4.36-4.92,8.68-7.32,13.05c-1.3,2.37-2.15,4.75-5.98,3.55
		c-1.2-0.38-3.75,1.77-4.9,3.33c-5.99,8.15-11.63,16.56-17.62,24.71c-2.32,3.16-4.14,5.81-9.91,4.68
		c-6.88-1.34-13.46,2.87-18.16,8.65c-1.16,1.42-1.9,3.21-3.17,4.5c-4.03,4.11-5.14,8.88-5,14.6c0.26,10.58-2.87,20.1-11.17,27.37
		c-5.97,5.23-10.98,11.11-12.02,19.53c-7.35-4.23-13.9-9.01-22.45-7.9c-6.27,0.81-12.52,2.08-18.81,2.45
		c-3.29,0.19-7.48-0.11-9.86-1.98c-6.2-4.88-12.64-5.22-19.77-3.57c-1.35,0.31-3.26,0.54-4.2-0.16c-4.11-3.03-8.91-3.09-13.54-4.3
		c-6.97-1.82-13.47-5.46-20.15-8.37c-1.52-0.66-2.93-1.96-4.46-2.09c-4.95-0.4-5.81-3.85-6.03-7.66c-0.11-1.96,0.72-3.96,0.72-5.94
		c0.01-8.4,0.95-17.01-0.58-25.14c-1.11-5.9-2.8-13.82-12.41-12.95c-1.68,0.15-3.51-0.98-5.22-1.66c-6.65-2.67-6.79-3.51-3.52-9.72
		c2.76-5.23,5.07-10.69,7.91-16.74c-2.38-0.1-4.21-0.18-6.9-0.3c2.6-5.12,5.13-9.93,7.45-14.83c0.56-1.19,0.56-2.7,0.6-4.07
		c0.09-3.38-0.4-6.83,0.18-10.11c0.54-3,0.58-4.85-2.52-6.55c-7.44-4.09-7.81-12.65-0.6-16.92c4.93-2.92,8.07-6.61,9.67-12.09
		c1.09-3.76,3.48-5.53,8.17-5.37c14.88,0.5,29.79,0.47,44.68,0.08c5.55-0.15,9.7-3.71,11.03-9.34c2.36-10.03,3.93-20.27,6.77-30.15
		c1.02-3.53,4.16-7.84,7.38-9.09c8.94-3.48,12.97-8.28,13.53-17.87c0.45-7.61,1.68-15.19,2.81-22.74c0.22-1.49,1.28-3.18,2.46-4.15
		c4.07-3.35,8.35-6.45,12.59-9.59c4.95-3.65,5.73-6.57,3.31-11.85c-0.5-1.08-0.73-2.6-0.34-3.64c0.2-0.53,2.07-0.69,3.14-0.59
		c8.45,0.82,9.78-0.43,10.15-9.05c0.1-2.25,0.69-4.66,1.7-6.67c3.58-7.05,4.69-14.12,1.73-21.71c-0.6-1.55-0.19-3.62,0.12-5.39
		c2.28-12.95-3.01-23.22-14.73-29.27c-1.36-0.7-2.86-3.94-2.32-5.02c2.17-4.35,3.9-7.92-0.97-11.9c-2.36-1.93-3.55-5.3-5.2-8.07
		c-2.1-3.53-5.24-3.14-8.38-2.13c-5.68,1.83-9.1,0.82-12.14-4.08c-1.19-1.92-2.12-4.01-3.17-6.01c3.01-1.52,5.9-3.93,9.04-4.34
		c4.38-0.56,8.53,0.4,13.12,2.4c7.58,3.32,16.42,2.45,24.2-1.58c1.38-0.72,2.75-2.92,2.8-4.47c0.14-5.09,0.47-10.43-0.94-15.18
		c-0.61-2.08-5.11-3.84-8.06-4.26c-7.92-1.12-8.35-1.46-7.15-9.38c1.24-8.22,2.18-16.48,3.24-24.73c0.78-6.16-2.39-10.11-7.35-13.05
		c-2.14-1.27-4.27-2.56-6.12-3.67c-2.75,1.98-5.22,3.76-7.54,5.42c0-5.89-0.06-10.84,0.06-15.79c0.02-0.89,0.65-1.85,1.2-2.64
		c2.25-3.22,4.96-6.18,6.79-9.62c2.33-4.39,5.08-7.32,10.36-8.3c2.76-0.51,5.35-3.13,7.56-5.27c7.47-7.22,8.9-7.37,17.34-1.24
		c1.97,1.43,4.24,3.28,6.42,3.36c2.68,0.09,7.22-0.9,7.71-2.45c0.77-2.44-0.33-6.47-2.13-8.52c-4.72-5.4-10.26-10.06-15.42-15.08
		c-1.71-1.67-3.22-3.54-5.68-6.27c6.94,0.69,12.35,1.54,17.77,1.66c2.97,0.07,5.96-1.16,8.96-1.67c2.52-0.43,5.47-1.64,7.52-0.8
		c4.78,1.96,8.33,0.11,12.24-1.97c3.8-2.02,7.72-4.14,11.84-5.14c2.57-0.62,6.03,0.04,8.37,1.38c5.4,3.1,6.55,2.83,7.51-3.38
		c0.07-0.48,0.23-0.98,0.45-1.41c0.14-0.27,0.47-0.44-0.03,0c6.03,2.08,11.66,3.73,17.07,5.95c7.07,2.9,15.43,4.74,20.57,9.76
		c6.86,6.69,14.88,11.16,22.56,16.26c18.77,12.47,37.84,24.5,56.9,36.53c3.6,2.27,4.56,4.77,3.4,8.77
		c-5.44,18.78-9.63,37.71-9.75,57.48c-0.16,25.46,1.79,50.64,5.67,75.82c1.86,12.07,2.79,25.07,0.29,36.83
		c-2.97,13.96-9.21,27.5-15.86,40.27c-2.38,4.57-10.05,6.43-15.38,9.38c-3.2,1.77-6.63,3.14-9.83,4.91
		c-8.83,4.9-12.73,13.32-15.71,22.36c-0.58,1.75-1.52,3.45-1.72,5.24C392.71,468.05,387.96,470.67,381.51,472.42z" />
      </g>
    </svg>
  );
}