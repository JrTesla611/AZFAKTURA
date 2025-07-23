// /* eslint-disable @next/next/no-img-element */
// "use client";

// import {
//   BarChart4,
//   CodeXml,
//   Download,
//   Hourglass,
//   Infinity,
//   Linkedin,
//   NotebookText,
//   Plus,
//   Receipt,
//   Rocket,
//   Twitter,
//   User,
//   Users,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import DemoPreview from "./components/demoPreview";

// const Home = () => {
//   return (
//     <div className="bg-[#f7f7f7] flex justify-center items-center overflow-x-hidden">
//       <div className="border-l border-r max-w-4xl w-full mx-auto border-dashed h-full flex justify-center flex-col border-gray-300">
//         {/* <a
//           // href="https://www.producthunt.com/posts/invoice-generator-9bce3e1b-dab2-4a7a-ba7e-e315be868119"
//           // target="_blank"
//           // className="flex justify-center items-center mt-10"
//         >
//           <svg
//             // xmlns="http://www.w3.org/2000/svg"
//             // viewBox="0 0 122 37"
//             // className="w-64"
//           >
//             <path
//               // fill="#f97316"
//               // d="M104.953 36.286c-4.22 1.634-5.936.086-5.936-.891 1.495-.126 5.067-.331 5.936.891m5.356-1.336a5.486 5.486 0 0 1-7.083-.497c1.44-.4 5.372-.874 7.083.497m-7.139-3.176c.16 2.033-1.922 3.176-4.17 3.341.41-2.045 2.509-2.958 4.17-3.341m4.032-1.874c.238.869-.089 3.228-3.323 4.164.139-1.593.986-3.667 3.323-4.164m6.413 2.365a5.005 5.005 0 0 1-6.385.571c1.296-.668 4.408-1.57 6.385-.571m-3.417-4.706c.443.856.537 3.295-2.326 4.763-.166-1.57.465-4.255 2.326-4.763m7.083.948a4.389 4.389 0 0 1-2.657 2.217 4.243 4.243 0 0 1-3.39-.44c1.805-1.697 4.685-2.348 6.047-1.777m-4.28-4.547c1.284 2.24-.073 4.798-1.485 5.849-.628-2.082-.052-4.351 1.484-5.849Zm6.662-.097c.155 3.479-3.478 3.29-5.184 3.313.537-.731 3.522-3.381 5.184-3.313m-4.48-3.25c.675.743 1.688 3.599-.555 5.929-.703-1.685-.858-4.272.554-5.929Zm6.385-1.542c.116 2.81-2.249 4.232-4.53 4.21.686-1.354 2.52-3.964 4.53-4.21m-4.785-1.936c1.512.89 1.34 3.764.448 5.26-1.002-1.393-1.75-3.124-.448-5.26m4.884-2.633c.748 2.559-1.45 4.29-2.769 4.438.338-1.222.781-3.387 2.77-4.438Zm-4.607-.851c1.667.835 2.457 2.832 1.833 4.632-1.163-.937-2.564-2.919-1.833-4.632m4.685-3.096c1.03 3.113-1.335 4.13-2.215 4.38.105-1.324.947-3.963 2.215-4.38m-4.619-.817c.676.195 2.603 1.777 2.254 4.61-1.268-.714-2.808-2.074-2.254-4.61m3.921-3.9c1.152 3.826-.77 5.397-1.401 5.71-.1-1.21-.222-4.037 1.401-5.71m-4.264.096c1.207.337 2.73 2.553 2.658 4.684-1.196-.548-2.985-2.827-2.658-4.684m.36-5.934c2.802 2.896 3.195 5.18 2.376 7.996-1.269-1.142-2.282-4.569-2.376-7.996M17.047 36.286c4.22 1.634 5.936.086 5.936-.891-1.495-.126-5.067-.331-5.936.891M11.69 34.95a5.486 5.486 0 0 0 7.083-.497c-1.44-.4-5.372-.874-7.083.497m7.139-3.176c-.16 2.033 1.922 3.176 4.17 3.341-.41-2.045-2.509-2.958-4.17-3.341M14.798 29.9c-.238.869.089 3.228 3.323 4.164-.139-1.593-.986-3.667-3.323-4.164m-6.413 2.365a5.005 5.005 0 0 0 6.385.571c-1.296-.668-4.408-1.57-6.385-.571m3.417-4.706c-.443.856-.537 3.295 2.326 4.763.166-1.57-.465-4.255-2.326-4.763m-7.083.948a4.389 4.389 0 0 0 2.657 2.217 4.243 4.243 0 0 0 3.39-.44c-1.805-1.697-4.685-2.348-6.047-1.777m4.28-4.547c-1.284 2.24.073 4.798 1.485 5.849.628-2.082.052-4.351-1.484-5.849Zm-6.662-.097c-.155 3.479 3.478 3.29 5.184 3.313-.537-.731-3.522-3.381-5.184-3.313m4.48-3.25c-.675.743-1.688 3.599.555 5.929.703-1.685.858-4.272-.554-5.929ZM.433 19.071c-.116 2.81 2.249 4.232 4.53 4.21-.686-1.354-2.52-3.964-4.53-4.21m4.785-1.936c-1.512.89-1.34 3.764-.448 5.26 1.002-1.393 1.75-3.124.448-5.26M.333 14.502c-.748 2.559 1.45 4.29 2.769 4.438-.338-1.222-.781-3.387-2.77-4.438Zm4.607-.851c-1.667.835-2.457 2.832-1.833 4.632 1.163-.937 2.564-2.919 1.833-4.632M.255 10.555c-1.03 3.113 1.335 4.13 2.215 4.38-.105-1.324-.947-3.963-2.215-4.38m4.619-.817c-.676.195-2.603 1.777-2.254 4.61 1.268-.714 2.808-2.074 2.254-4.61m-3.921-3.9c-1.152 3.826.77 5.397 1.401 5.71.1-1.21.222-4.037-1.401-5.71m4.264.096c-1.207.337-2.73 2.553-2.658 4.684 1.196-.548 2.985-2.827 2.658-4.684M4.857 0C2.055 2.896 1.662 5.18 2.481 7.996 3.75 6.854 4.763 3.427 4.857 0m49.105 35c.162 0 .288-.108.288-.27v-1.782a.284.284 0 0 0-.288-.288h-4.41l3.006-3.06c.486-.504 1.674-1.62 1.674-3.492 0-2.214-1.71-3.852-4.176-3.852-1.962 0-3.204 1.026-3.924 2.07-.09.108-.09.27.036.396l1.242 1.242c.162.144.27.162.414 0 .468-.612 1.026-1.188 1.998-1.188 1.044 0 1.728.648 1.728 1.584 0 1.116-.918 1.962-1.422 2.466l-3.744 3.798c-.09.126-.126.216-.126.342v1.764c0 .162.126.27.288.27zm4.572 0c.162 0 .288-.108.288-.27v-4.464c0-1.17.576-1.782 1.53-1.782.972 0 1.476.612 1.476 1.782v4.464c0 .162.126.27.288.27h2.178c.162 0 .288-.108.288-.27v-5.112c0-2.304-1.35-3.654-3.186-3.654-1.26 0-2.07.63-2.574 1.53l-.09-1.026c0-.216-.108-.288-.27-.288h-2.124c-.162 0-.27.108-.27.27v8.28c0 .162.108.27.27.27zm11.754.216c1.26 0 2.16-.504 2.754-1.35l.036.864c0 .162.126.27.288.27h1.98c.162 0 .306-.108.306-.27V22.4c0-.162-.126-.27-.288-.27H73.15c-.162 0-.27.108-.27.27v4.662c-.594-.702-1.44-1.098-2.592-1.098-2.448 0-4.14 2.016-4.14 4.626 0 2.628 1.692 4.626 4.14 4.626m.594-2.502c-1.17 0-2.052-.828-2.052-2.124 0-1.278.882-2.124 2.052-2.124 1.206 0 2.034.846 2.034 2.106 0 1.296-.828 2.142-2.034 2.142M20.72 15c.09 0 .15-.06.15-.15v-2.26h.72c1.69 0 2.49-.93 2.49-2.29 0-1.36-.8-2.3-2.49-2.3h-2.15c-.09 0-.15.06-.15.15v6.7c0 .09.06.15.15.15zm.15-5.6h.68c.53 0 1.02.17 1.02.9 0 .72-.49.89-1.02.89h-.68zm5.5 5.6c.09 0 .16-.06.16-.15v-2.36c0-.73.38-1.13 1.01-1.13.15 0 .26.02.36.05.14.03.21 0 .21-.13v-.97c0-.09-.02-.15-.09-.2-.08-.06-.21-.13-.45-.13-.57 0-.88.4-1.04.93l-.05-.65c0-.12-.06-.16-.15-.16h-1.18c-.09 0-.15.06-.15.15v4.6c0 .09.06.15.15.15zm4.77.12c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57m0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17m5.49 1.4c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57m.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19m5.52 1.39c.71 0 1.16-.35 1.44-.85l.04.57c0 .12.07.16.16.16h1.17c.09 0 .16-.06.16-.15v-4.6c0-.09-.07-.15-.16-.15h-1.21c-.09 0-.16.06-.16.15v2.48c0 .65-.33.99-.85.99-.54 0-.82-.34-.82-.99v-2.48c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v2.84c0 1.28.74 2.03 1.76 2.03m6.44 0c.79 0 1.45-.35 1.87-.9.06-.07.05-.15-.01-.21l-.69-.66c-.08-.08-.19-.08-.26-.01-.27.25-.53.38-.86.38-.74 0-1.18-.56-1.18-1.2 0-.63.44-1.14 1.16-1.14.34 0 .6.12.86.38.08.07.19.07.27-.01l.69-.66c.06-.06.07-.15.01-.21-.42-.55-1.08-.9-1.9-.9-1.48 0-2.56 1.1-2.56 2.54 0 1.47 1.1 2.6 2.6 2.6m4.77 0c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51m5.95 0c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57m0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17M64.79 15c.09 0 .16-.06.16-.15v-3.57h.98c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.98v-.49c0-.33.11-.57.58-.57.11 0 .25.03.42.06.07.01.13 0 .13-.07V8.02c0-.06-.03-.13-.09-.16-.3-.15-.52-.17-.82-.17-1.09 0-1.76.52-1.76 1.72v.69h-.58c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.58v3.57c0 .09.06.15.15.15zm6.08.12c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51m4.65-5.14c-.7 0-1.15.35-1.43.85V8c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v6.85c0 .09.06.15.15.15h1.22c.09 0 .16-.06.16-.15v-2.48c0-.65.32-.99.85-.99.54 0 .82.34.82.99v2.48c0 .09.07.15.16.15h1.21c.09 0 .16-.06.16-.15v-2.84c0-1.28-.75-2.03-1.77-2.03m5.34 5.14c.69 0 1.32-.2 1.74-.62.09-.08.09-.16.05-.22l-.41-.58c-.06-.07-.1-.09-.18-.05-.41.23-.75.27-1.08.27-.7 0-1.16-.26-1.33-.79h2.82c.45 0 .58-.3.58-.8 0-1.26-.87-2.35-2.37-2.35-1.51 0-2.52 1.11-2.52 2.55 0 1.49 1.09 2.59 2.7 2.59m-1.23-3.05c.12-.58.55-.83 1.06-.83s.9.24 1 .83zm8.27 3.05c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57m.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19m5.81 1.39c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15v-4.6c0-.09-.07-.15-.16-.15h-1.11c-.09 0-.16.06-.16.15l-.02.47c-.32-.46-.81-.74-1.53-.74-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57m.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19m5.96 3.17c.08 0 .15-.04.18-.12l2.6-6.51c.04-.11-.02-.17-.13-.17h-1.24c-.08 0-.16.04-.19.12l-1.08 3-1.08-3c-.03-.08-.11-.12-.19-.12h-1.24c-.11 0-.17.06-.13.17l1.9 4.74-.72 1.71c-.05.12.01.18.13.18z"
//             />
//           </svg>
//         </a> */}
//         <div className="justify-center items-center h-full flex flex-col my-10">
//           <div className="border-t border-dashed border-gray-300 w-full mx-auto py-10 flex justify-center items-center relative">
//             <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
//             <Image
//               src="/azfaktura2.png"
//               width={500}
//               height={500}
//               className="rounded-lg"
//               alt="logo"
//             />
//           </div>
//           <div className="relative group">
//             <h1 className="font-semibold text-3xl md:text-7xl text-center w-full border-t border-b py-6 border-dashed text-balance px-4 text-black border-gray-300">
//               <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-green-700">
//                 AZFAKTURA
//               </span>
//               <span className=""> ilə daha sürətli ödəniş alın </span>
//             </h1>
//           </div>
//           <div className="pt-10 pb-11 flex gap-3 items-center mx-auto border-gray-300 border-b w-full justify-center border-dashed relative">
//             <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
//             <Link
//               href="/new"
//               className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-br from-green-500 to-blue-400 text-white hover:bg-black/90 px-6 py-2 text-lg"
//             >
//               Generate Invoice
//             </Link>
//             {/* <a
//               target="_blank"
//               href="https://github.com/pranavp10/invoice-generator"
//               className="inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-transparent hover:bg-neutral-100 hover:text-accent-foreground px-6 py-1.5 text-lg gap-2 border-dashed border-gray-400"
//             >
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 15 15"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
//                   fill="currentColor"
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//               Github
//             </a> */}
//           </div>
//           <div className=" group border-b  border-dashed text-balance text-center w-full font-semibold border-gray-300 ">
//             <div className="grid grid-cols-2 px-4 relative py-6 text-3xl md:text-7xl max-w-lg mx-auto">
//               <div className="flex flex-col border-r border-dashed border-gray-300">
//                 <div className="flex justify-center items-center gap-2">
//                   <Users className="w-4 h-4" />
//                   <span className="text-xs">Trusted by</span>
//                 </div>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-400">
//                   200
//                 </span>
//                 <span className="text-xs">users</span>
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex justify-center items-center gap-2">
//                   <Download className="w-4 h-4" />
//                   <span className="text-xs">Download</span>
//                 </div>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-400">
//                   400
//                 </span>
//                 <span className="text-xs">Invoices</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="mb-10">
//           <DemoPreview />
//         </div> */}
//         <p className="font-medium text-xl md:text-3xl border-t border-gray-300 border-b border-dashed md:py-6 py-3 px-7 text-neutral-700 text-center">
//           Niyə AZFAKTURA
//         </p>
//         <div className="grid sm:grid-cols-2 relative">
//           <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
//           <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
//           <div className="border-r border-b border-dashed p-7 border-gray-300 flex justify-center flex-col items-center">
//             <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-orange-100 to-pink-100">
//               <Rocket />
//             </p>
//             <p className="font-bold text-xl">Tez və Asan</p>
//             <p className="text-neutral-500 mt-1 text-center">
//               Sadəcə boşluqları doldurun və saniyələr ərzində peşəkar hesab-fakturalar yaradın
//             </p>
//           </div>
//           <div className="border-b border-dashed flex justify-center flex-col items-center p-7 border-gray-300">
//             <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-orange-100 to-pink-100">
//               <Infinity />
//             </p>
//             <p className="font-bold text-xl">Gözəl Şablonlar</p>
//             <p className="text-neutral-500 mt-1 text-center">
//               Müxtəlif müasir və fərdiləşdirilə bilən faktura şablonlarından seçin.
//             </p>
//           </div>
//           <div className="border-r border-b border-dashed flex justify-center flex-col items-center p-7 border-gray-300">
//             <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-orange-100 to-pink-100">
//               <NotebookText />
//             </p>
//             <p className="font-bold text-xl">Daha sürətli ödəniş alın</p>
//             <p className="text-neutral-500 mt-1 text-center">
//               Müştəri ödənişlərini daha sürətli etmək üçün hesab-fakturaları təhlükəsiz ödəniş bağlantıları ilə elektron şəkildə göndərin.
//             </p>
//           </div>
//           <div className="border-b border-gray-300 border-dashed flex justify-center flex-col items-center p-7">
//             <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-orange-100 to-pink-100">
//               <Receipt />
//             </p>
//             <p className="font-bold text-xl">Vaxta və pula qənaət edin</p>
//             <p className="text-neutral-500 mt-1 text-center">
//               Cədvəllərdən və bahalı hesab-faktura proqramlarından imtina edin.
//             </p>
//           </div>
//           {/* <div className="border-r border-gray-300 border-b border-dashed flex justify-center flex-col items-center p-7">
//             <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-orange-100 to-pink-100">
//               <Hourglass />
//             </p>
//             <p className="font-bold text-xl">Save Time & Money</p>
//             <p className="text-neutral-500 mt-1 text-center">
//               Ditch the spreadsheets and expensive invoicing software.
//             </p>
//           </div> */}
//           {/* <div className="border-b border-dashed p-7 border-gray-300 flex justify-center flex-col items-center">
//             <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-orange-100 to-pink-100">
//               <CodeXml />
//             </p>
//             <p className="font-bold text-xl">Free & Open Source</p>
//             <p className="text-neutral-500 mt-1 text-center">
//               Absolutely no cost, with the freedom to customize and adapt to
//               your needs.
//             </p>
//           </div> */}
//         </div>
//         <div className="px-5 py-11 flex justify-center items-center border-b border-dashed border-gray-300">
//           <div className="flex justify-center rounded-2xl max-w-3xl border-dashed items-center px-4 py-10 w-full flex-col gap-4  bg-gradient-to-br from-green-500 to-blue-400">
//             <p className="md:max-w-2xl text-center font-semibold text-xl text-black p-4 md:text-3xl text-balance">
//               Vaxt itirməyə son verin və layiq olduğunuz xidməti almağa başlayın.
//             </p>
//             <Link
//               href="/new"
//               className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-br from-red-400 to-red-500 text-white hover:bg-black/90 px-6 py-2 text-lg"
//             >
//               Generate Today!
//             </Link>
//           </div>
//         </div>
//         {/* <div className="flex justify-center items-center border-b border-dashed mb-20 border-gray-300 py-10 px-4 gap-4">
//           <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl border-gray-300">
//             <a
//               target="_blank"
//               href="https://github.com/pranavp10/invoice-generator"
//             >
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 15 15"
//                 fill="none"
//                 className="w-5 h-5"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
//                   fill="currentColor"
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </a>
//           </div>
//           <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl border-gray-300">
//             <a target="_blank" href="https://www.linkedin.com/in/pranavp10/">
//               <Linkedin />
//             </a>
//           </div>
//           <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl border-gray-300">
//             <a target="_blank" href="https://twitter.com/ThatsPranav">
//               <Twitter />
//             </a>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Home;
// "use client"; // Required for interactivity (hooks, event handlers)

// import { useEffect } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';

// export default function Home() {
//   // Scroll animation effect (converted from vanilla JS)
//   useEffect(() => {
//     const features = document.querySelectorAll('.box-glow');
    
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//         }
//       });
//     }, { threshold: 0.1 });
    
//     features.forEach(feature => {
//       observer.observe(feature);
//     });
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>AfterSlide - Create Stunning Presentations</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
//         <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
//       </Head>

//       <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#f8fafc' }}>
//         {/* Sticky Logo */}
//         <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md py-4 px-6 shadow-sm">
//           <h1 className="text-3xl font-bold luxury-gold">AfterSlide</h1>
//         </div>

//         {/* Hero Section */}
//         <div className="gradient-bg text-white pt-32 pb-12 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0d9488 0%, #065f46 100%)' }}>
//           <div className="max-w-7xl mx-auto text-center">
//             <div className="mb-8 animate__animated animate__fadeInDown">
//               <h1 className="text-5xl md:text-6xl font-bold logo-text">AfterSlide</h1>
//               <p className="mt-2 text-emerald-100 text-lg">Presentation reimagined</p>
//             </div>
            
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate__animated animate__fadeIn">
//               <span className="luxury-gold">Premium</span> Invoice & Billing Solution <br className="hidden md:block"/> 
//               That <span className="luxury-gold">Grows</span> Your Business
//             </h2>
            
//             <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-10 animate__animated animate__fadeIn animate__delay-1s">
//               The easiest way to design stunning slides that captivate your audience
//             </p>
            
//             <div className="animate__animated animate__fadeIn animate__delay-2s">
//               <button 
//                 className="bg-white text-emerald-800 font-bold py-4 px-8 rounded-full text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 pulse-animation"
//                 onClick={() => alert("Create Now clicked!")}
//               >
//                 Create Now - It's Free!
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Features Section */}
//         <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Feature 1 */}
//             <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-2 box-glow gold-border">
//               <div className="absolute top-4 right-4 text-xs font-bold bg-amber-50 text-amber-800 px-2 py-1 rounded-full">PRO FEATURE</div>
//               <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">100% Free Forever</h3>
//               <p className="text-gray-600">No hidden fees, no subscriptions. Create unlimited presentations without spending a dime.</p>
//             </div>
            
//             {/* Feature 2 */}
//             <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-2 box-glow">
//               <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Beautiful Templates</h3>
//               <p className="text-gray-600">Choose from hundreds of professionally designed templates for any occasion or industry.</p>
//             </div>
            
//             {/* Feature 3 */}
//             <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-2 box-glow">
//               <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Powered Design</h3>
//               <p className="text-gray-600">Our AI suggests perfect layouts, colors, and fonts based on your content.</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Currency Display */}
//         <div className="py-12 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="bg-white rounded-xl shadow-xl p-8 text-center gold-border">
//               <div className="flex justify-center space-x-1 mb-6">
//                 <span className="text-5xl font-bold text-gray-800">$</span>
//                 <span className="text-5xl font-bold luxury-gold">10,857</span>
//                 <span className="text-5xl font-bold text-gray-800">.49</span>
//               </div>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Average monthly revenue increase reported by our users after switching to AfterSlide for their invoicing needs.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Creator Info */}
//         <div className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
//               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="Creator" className="w-full h-full object-cover"/>
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Meet Sarah Johnson</h3>
//             <p className="text-emerald-600 font-medium mb-6">Founder & Lead Designer</p>
//             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//               "After years of struggling with complicated presentation software, I created AfterSlide to make beautiful design accessible to everyone. Our mission is to help you communicate your ideas effectively without the frustration of traditional tools."
//             </p>
//             <div className="flex justify-center space-x-4">
//               <a href="#" className="text-emerald-600 hover:text-emerald-800">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                 </svg>
//               </a>
//               <a href="#" className="text-emerald-600 hover:text-emerald-800">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                 </svg>
//               </a>
//               <a href="#" className="text-emerald-600 hover:text-emerald-800">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
        
        
//         {/* Final CTA */}
//         <div className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg text-white" style={{ background: 'linear-gradient(135deg, #0d9488 0%, #065f46 100%)' }}>
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your First Presentation?</h2>
//             <p className="text-xl text-emerald-100 mb-10">Join over 500,000 professionals who trust AfterSlide for their presentations</p>
            
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
              

//               <Link
//                 href="/new"
//                 className="inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-br from-red-400 to-red-500 text-white hover:from-red-500 hover:to-red-600 px-8 py-4 text-lg font-bold shadow-lg hover:scale-105 transform transition-all duration-300"
//               >
//                 Generate Today!
//               </Link>
//             </div>
//           </div>
//         </div>
        
//         {/* Footer */}
//         <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
//           <div className="max-w-7xl mx-auto text-center">
//             <p className="text-gray-400">© 2023 AfterSlide. All rights reserved.</p>
//           </div>
//         </footer>
//       </div>

//       {/* Inline styles moved to JSX */}
//       <style jsx global>{`
//         .gradient-bg {
//           background: linear-gradient(135deg, #0d9488 0%, #065f46 100%);
//         }
        
//         .luxury-gold {
//           background: linear-gradient(135deg, #d4af37 0%, #f9d423 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
        
//         .gold-border {
//           border: 2px solid rgba(212, 175, 55, 0.3);
//         }
        
//         .box-glow:hover {
//           box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.4);
//         }
        
//         .pulse-animation {
//           animation: pulse 2s infinite;
//         }
        
//         @keyframes pulse {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//           100% { transform: scale(1); }
//         }
        
//         .logo-text {
//           background: linear-gradient(90deg, #f0fdf4 0%, #d1fae5 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//       `}</style>
//     </>
//   );
// }
"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Mobile menu toggle handler
    const handleClickOutside = (e: MouseEvent) => {
      const mobileToggle = document.getElementById('mobileToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      
      if (mobileToggle && !mobileToggle.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Navbar scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      observer.disconnect();
    };
  }, []);

  const smoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Head>
        <title>InvoiceLux - Premium Invoice Solutions</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </Head>

      <div className="min-h-screen" style={{ 
        fontFamily: "'Inter', sans-serif",
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        color: '#ffffff',
        overflowX: 'hidden',
        lineHeight: 1.6
      }}>
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 ${scrolled ? 'bg-black/80' : 'bg-black/30'} backdrop-blur-md border-b border-white/10`}>
          <div className="container max-w-1400 mx-auto px-8">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                AZFAKTURA
              </div>
              <ul className="hidden md:flex gap-8">
                <li>
                  <a 
                    href="#home" 
                    className="text-white font-medium transition-all duration-300 relative"
                    onClick={(e) => smoothScroll(e, '#home')}
                  >
                    Yarat
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#features" 
                    className="text-white font-medium transition-all duration-300 relative"
                    onClick={(e) => smoothScroll(e, '#features')}
                  >
                    Xüsusiyyətlər
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-white font-medium transition-all duration-300 relative"
                    onClick={(e) => smoothScroll(e, '#about')}
                  >
                    Haqqında
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
              <button 
                id="mobileToggle"
                className="md:hidden flex flex-col p-2 bg-transparent border-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="w-6 h-0.5 bg-white my-0.5 transition-all duration-300"></span>
                <span className="w-6 h-0.5 bg-white my-0.5 transition-all duration-300"></span>
                <span className="w-6 h-0.5 bg-white my-0.5 transition-all duration-300"></span>
              </button>
              <Link
                 href="/new"
                 className="inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-br from-red-400 to-red-500 text-white hover:from-red-500 hover:to-red-600 px-8 py-4 text-lg font-bold shadow-lg hover:scale-105 transform transition-all duration-300"
               >
                 Başla!
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div 
          id="mobileMenu"
          className={`fixed top-20 left-0 w-full bg-black/95 backdrop-blur-md py-8 transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} z-40`}
        >
          <ul className="flex flex-col items-center gap-6">
            <li>
              <a 
                href="#home" 
                className="text-white text-xl font-medium px-4 py-2 transition-all duration-300 hover:text-cyan-400"
                onClick={(e) => {
                  smoothScroll(e, '#home');
                  setMobileMenuOpen(false);
                }}
              >
                Bugün Yarat
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                className="text-white text-xl font-medium px-4 py-2 transition-all duration-300 hover:text-cyan-400"
                onClick={(e) => {
                  smoothScroll(e, '#features');
                  setMobileMenuOpen(false);
                }}
              >
                Xüsusiyyətlər
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-white text-xl font-medium px-4 py-2 transition-all duration-300 hover:text-cyan-400"
                onClick={(e) => {
                  smoothScroll(e, '#about');
                  setMobileMenuOpen(false);
                }}
              >
                Haqqında
              </a>
            </li>
            <li className="mt-4">
              <a 
                href="#" 
                className="bg-gradient-to-r from-cyan-400 to-pink-500 py-3 px-8 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Başla
              </a>
            </li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden pt-20" id="home">
          <div className="absolute inset-0 bg-radial-gradient from-green-400/10 to-transparent animate-pulse opacity-30"></div>
          <div className="container max-w-1400 mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent animate-slideInLeft">
                  Biznesinizi Asanlaşdırın
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slideInLeft delay-100">
                  Saniyələr ərzində professional fakturalar yaradın. Müasir bizneslər üçün hazırlanmış faktura platformamızla hesablaşma prosesinizi asanlaşdırın.
                </p>
                <div className="animate-slideInLeft delay-200">
                  <Link
                 href="/new"
                 className="inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-br from-red-400 to-red-500 text-white hover:from-red-500 hover:to-red-600 px-8 py-4 text-lg font-bold shadow-lg hover:scale-105 transform transition-all duration-300"
               >
                 Yaratmağa Başla!
              </Link>
                </div>
              </div>
              <div className="animate-slideInRight">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transform perspective-1000 rotate-y-[-15deg] rotate-x-[5deg] shadow-2xl shadow-black/30 animate-float">
                  <div className="h-72 flex flex-col justify-between">
                    <div className="h-10 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg opacity-80"></div>
                    <div className="h-5 bg-white/30 rounded w-3/4"></div>
                    <div className="h-5 bg-white/20 rounded w-3/5"></div>
                    <div className="h-5 bg-white/20 rounded w-4/5"></div>
                    <div className="h-10 bg-green-400/30 rounded-lg mt-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20 fade-in" id="features">
          <div className="container max-w-1400 mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Güclü Xüsusiyyətlər
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 fade-in" id="about">
          <div className="container max-w-1400 mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                  AZFAKTURA Haqqında
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Gözəl və səmərəli faktura həllərinə olan ehtiyacdan doğulan AZFAKTURA, bizneslərin hesablaşmalarını necə idarə etdiyini inqilab etmək üçün son texnologiyanı zərif dizaynla birləşdirir.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Missiyamız sahibkarları və biznesləri nəinki qüsursuz işləyən, həm də onların brendini üslub və sofistikasiya ilə təmsil edən alətlərlə gücləndirməkdir.
                </p>
                <p className="text-lg text-gray-300">
                  Sizdə Premium platformamızla faktura prosesini həyata keçirən məmnun müştərilərimizə qoşulun.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                  👨‍💻
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Tərtibatçı ilə Tanış Olun</h3>
                <p className="text-white font-medium text-center mb-2">Cahad Abdulla</p>
                <p className="text-gray-400 text-sm text-center mb-6">8-ci sinif məktəb şagirdi.</p>
                <p className="text-gray-300 text-center italic">
                  "Biznes əməliyyatlarını daha hamar və daha xoş edən alətlər yaratmaq ehtirasımla. Hər bir kod sətri dəqiqlik və məqsədlə hazırlanır."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black/30 border-t border-white/10">
          <div className="container max-w-1400 mx-auto px-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 AZFAKTURA. Bütün hüquqlar qorunur. Müasir bizneslər üçün ❤️ ilə hazırlanıb.
            </p>
          </div>
        </footer>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(0px); }
          50% { transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(-20px); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
        .animate-slideInLeft.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-slideInLeft.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, rgba(0, 255, 127, 0.1) 0%, transparent 70%);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-[-15deg] {
          transform: rotateY(-15deg);
        }
        .rotate-x-[5deg] {
          transform: rotateX(5deg);
        }
      `}</style>
    </>
  );
}

const features = [
  {
    icon: "💵",
    title: "Pulsuz və Reklamsız",
    description: "Pulsuz və reklamsız faktura yaradın."
  },
  {
    icon: "⚡",
    title: "İldırım Sürətli",
    description: "İntuitiv interfeysimiz və ağıllı şablonumuzla saniyələr ərzində professional fakturalar yaradın."
  },
  {
    icon: "🎨",
    title: "Gözəl Dizayn",
    description: "Biznesinizi əks etdirən gözəl şablon ilə fakturalarınızı fərdiləşdirin."
  },
  {
    icon: "🔒",
    title: "Təhlükəsiz və Etibarlı",
    description: "Bank səviyyəli təhlükəsizlik məlumatlarınızın end-to-end şifrələmə ilə qorunmasını təmin edir."
  },
  {
    icon: "📱",
    title: "Mobil Ünvanlandırma",
    description: "Responsiv mobil-dost dizaynımızla istənilən yerdən, istənilən vaxt fakturalarınıza daxil ola bilərsiniz."
  },
  {
    icon: "🌐",
    title: "Qlobal Dəstək",
    description: "Dünya miqyasında biznes üçün çoxvalyutalı dəstək və beynəlxalq vergi uyğunluğu."
  }
];