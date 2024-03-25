import React from "react";
import "./About.scss";
const About = () => {
  return (
    <div className="About">
      <div className="mainContent">
        <div className="aboutP">
          <span>About Me</span>
          <h4>
          Hey folks! I'm a student at Essex County College and The Knowledge House, where I'm diving into the world of computer science. For me, it's all about getting hands-on with those programming languages and building cool projects. Computer science isn't just about coding and algorithms to me; it's like a playground where creativity meets problem-solving. When I'm not buried in code, you'll probably catch me hitting the field for some sports or unwinding with a video game or two. Gotta keep the balance, right? So yeah, that's me – juggling college, coding, and a bit of fun on the side. It's a journey, but hey, I'm here for the ride!
          </h4>
        </div>
        <div className="skills">
          <span>Technologies </span>
          <div className="skillsItem">
    <span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="0.7em"
              viewBox="0 0 512 512"
            >
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
            </svg>
            <p>React </p>
    </span>
    <span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="0.7em"
              viewBox="0 0 448 512"
            >
              <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
            </svg>
            <p>Javascript </p>
    </span>
            
<span>


      <svg  height="0.7em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_950_641)"><path d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z" fill="black"/></g><defs><clipPath id="clip0_950_641"><rect fill="white" height="24" width="24"/></clipPath></defs></svg>
            <p>Next js </p>
</span>


<span>


<svg   height="0.7em" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"/></svg>
            <p>Java </p>
</span>
<span>

<svg xmlns="http://www.w3.org/2000/svg" height="0.7em" viewBox="0 0 24 24" id="mongodb"><path d="M11.884,0c-0.002,0.019-0.004,0.031-0.005,0.049v0.013h-0.001c-0.002,0.015-0.003,0.025-0.004,0.039v0.015h-0.002c0,0.01-0.002,0.018-0.002,0.026v0.026h-0.003c-0.001,0.008-0.001,0.018-0.003,0.025v0.021h-0.002c0,0.007,0,0.015-0.002,0.021v0.02h-0.002c0,0.01-0.001,0.022-0.002,0.032v0.002c-0.003,0.017-0.006,0.034-0.009,0.05v0.008h-0.002c-0.001,0.004-0.003,0.008-0.003,0.012v0.017h-0.003v0.022h-0.005v0.018h-0.005v0.021h-0.004v0.019H11.82v0.017h-0.006v0.014h-0.004v0.018h-0.004v0.014H11.8v0.013h-0.003v0.015h-0.004c-0.001,0.001-0.001,0.003-0.001,0.004v0.01h-0.003c-0.001,0.002-0.001,0.004-0.001,0.006v0.006h-0.002c-0.001,0.003-0.002,0.008-0.002,0.01c-0.003,0.007-0.007,0.014-0.01,0.021v0.002c-0.002,0.002-0.004,0.005-0.005,0.007v0.008h-0.004v0.008h-0.005v0.008h-0.003v0.01H11.75v0.014h-0.004v0.004h-0.004v0.008h-0.004v0.011h-0.004v0.008h-0.006v0.011h-0.004v0.008h-0.005v0.008h-0.003v0.01H11.71v0.008h-0.004v0.006h-0.004v0.008h-0.006V0.76h-0.004v0.006h-0.005v0.008h-0.004v0.011h-0.005v0.004h-0.003v0.008h-0.006v0.004h-0.004v0.01H11.66v0.004h-0.004v0.008h-0.005v0.006h-0.003l-0.002,0.004v0.004h-0.002c-0.001,0.002-0.002,0.002-0.002,0.004v0.001h-0.001c-0.001,0.003-0.002,0.005-0.004,0.007v0.003h-0.001c-0.005,0.006-0.008,0.012-0.012,0.018v0.001c-0.002,0.002-0.007,0.006-0.009,0.01v0.002h-0.001c-0.001,0.001-0.003,0.002-0.003,0.003v0.003h-0.002l-0.003,0.003v0.001h-0.001c0,0.001-0.002,0.002-0.003,0.004v0.004h-0.003l-0.002,0.002v0.002h-0.002c0,0.002-0.002,0.002-0.002,0.003v0.003h-0.004c0,0.001-0.001,0.002-0.002,0.003V0.92h-0.003v0.004h-0.004V0.93h-0.004v0.008h-0.005V0.93h-0.005v0.004H11.56V0.94h-0.005v0.008H11.55v0.004h-0.004v0.006h-0.004v0.004h-0.004V0.97h-0.006v0.004h-0.004V0.98h-0.005v0.004h-0.004v0.005h-0.005v0.01h-0.002v0.004h-0.006v0.005h-0.004V1.01h-0.004v0.004h-0.005v0.01h-0.004v0.004h-0.005v0.004h-0.004v0.006h-0.005v0.004h-0.005v0.004h-0.004V1.05H11.46v0.01h-0.004v0.005H11.45v0.004h-0.004v0.004H11.44v0.006h-0.004v0.004h-0.005V1.09h-0.004v0.004h-0.006V1.1h-0.002v0.004h-0.004v0.004H11.41v0.004h-0.004v0.006h-0.005v0.004h-0.003c-0.001,0.001-0.001,0.002-0.001,0.002v0.002h-0.002L11.39,1.13c0,0-0.002,0.002-0.004,0.003v0.006h-0.004v0.005h-0.004v0.004h-0.004v0.004h-0.003l-0.003,0.003v0.003h-0.002L11.364,1.16v0.003h-0.002c-0.005,0.006-0.007,0.01-0.014,0.016c-0.002,0.002-0.008,0.007-0.012,0.01c-0.012,0.008-0.028,0.021-0.04,0.032c-0.008,0.005-0.016,0.012-0.022,0.017v0.001h-0.001c-0.016,0.013-0.032,0.025-0.05,0.039v0.001c-0.024,0.02-0.048,0.039-0.076,0.062V1.34h-0.002c-0.058,0.047-0.12,0.1-0.19,0.159V1.5h-0.001c-0.173,0.148-0.378,0.338-0.608,0.568l-0.019,0.019c-1.39,1.407-3.581,4.339-3.812,9.077c-0.02,0.392-0.016,0.773,0.006,1.144v0.009c0.111,1.867,0.71,3.461,1.46,4.756v0.001c0.298,0.516,0.62,0.985,0.947,1.405v0.001c1.126,1.455,2.276,2.317,2.57,2.526c0.451,1.023,0.409,2.779,0.409,2.779L12.563,24c0,0-0.134-1.701,0.054-2.522c0.058-0.257,0.196-0.476,0.357-0.662c0.108-0.075,0.429-0.301,0.815-0.645c0.018-0.019,0.029-0.036,0.045-0.054c1.555-1.418,4.459-4.91,3.463-10.599c-1.291-5.56-4.336-7.387-4.663-8.086C12.273,0.939,11.884,0,11.884,0z"></path></svg>
            <p>Mongodb</p>
</span>
<span>


<svg xmlns="http://www.w3.org/2000/svg" height="0.7EM" viewBox="0 0 50 50">
<path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
</svg>
            <p>Express js </p>
</span>
<span>


<svg xmlns="http://www.w3.org/2000/svg" height='0.7em' viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>
<p>GitHub </p>
</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
