import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Spotlight from "@/components/spotlight";
import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Новости */}
          <div className="text-center pb-8 md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Новости
            </h1>
            <div className="mx-auto max-w-3xl">
              {/* Card 1 */}
              <div className="rounded-2xl bg-gray-900/90 mb-5">
                <Spotlight className="group mx-auto flex max-w-sm flex-col items-start gap-5 lg:max-w-none">
                  <a
                    className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                    href="#0"
                  >
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      {/* Arrow */}
                      <div
                        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={8}
                          fill="none"
                        >
                          <path
                            fill="#F4F4F5"
                            d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                          />
                        </svg>
                      </div>
                      <div className="block md:flex">
                        {/* Image */}
                        <Image
                          className="inline-flex w-full h-[100px] md:w-[250px] md:h-[150px] object-contain"
                          src={WorflowImg01}
                          alt="Workflow 01"
                        />
                        {/* Content */}
                        <div className="p-6">
                          <div className="mb-3">
                            <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                              <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                Новость1
                              </span>
                            </span>
                          </div>
                          <p className="text-indigo-200/65">
                            Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие!
                          </p>
                        </div>
                      </div>
                    </div>

                    
                  </a>
                </Spotlight>
                  <div className="w-full flex gap-8 justify-center pt-5 pb-5">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0556 9.00391C15.5164 7.57689 15.7491 6.32772 15.7491 5.25064C15.7491 2.85197 14.81 1.00323 13.2491 1.00323C12.4023 1.00323 12.1402 1.50747 11.8123 2.75005C11.8295 2.68512 11.6494 3.38401 11.5968 3.57126C11.4958 3.93 11.32 4.54075 11.0697 5.40227C11.063 5.42535 11.0532 5.4471 11.0403 5.46718L8.17359 9.95284C7.49554 11.0138 6.49507 11.8293 5.31919 12.2795L4.06196 12.7609C3.26859 13.0646 2.80797 13.8943 2.96968 14.7283L3.65584 18.267C3.82298 19.1289 4.47629 19.815 5.32909 20.024L13.5786 22.0459C16.1098 22.6663 18.6682 21.1314 19.3121 18.606L20.886 12.4333C21.2612 10.9616 20.3723 9.46441 18.9007 9.08916C18.6786 9.03255 18.4504 9.00391 18.2212 9.00391H15.0556Z" fill="#f5f5f5"/>
                      </svg>
                    </div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0556 14.1829C15.5164 15.6099 15.7491 16.859 15.7491 17.9361C15.7491 20.3348 14.81 22.1835 13.2491 22.1835C12.4493 22.1835 12.1712 21.7338 11.8665 20.637L11.5968 19.6155C11.4958 19.2568 11.32 18.646 11.0697 17.7845C11.063 17.7614 11.0532 17.7397 11.0403 17.7196L8.17359 13.2339C7.49554 12.173 6.49507 11.3575 5.31919 10.9073L4.06196 10.4259C3.26859 10.1221 2.80797 9.29247 2.96968 8.45847L3.65584 4.9198C3.82298 4.05781 4.47629 3.3718 5.32909 3.16278L13.5786 1.14085C16.1098 0.520459 18.6682 2.05539 19.3121 4.58072L20.886 10.7534C21.2612 12.2251 20.3723 13.7224 18.9007 14.0976C18.6786 14.1542 18.4504 14.1829 18.2212 14.1829H15.0556Z" fill="#f5f5f5"/>
                      </svg>
                    </div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.746704,4 L10.2109085,4 C10.625122,4 10.9609085,4.33578644 10.9609085,4.75 C10.9609085,5.12969577 10.6787546,5.44349096 10.312679,5.49315338 L10.2109085,5.5 L6.746704,5.5 C5.55584001,5.5 4.58105908,6.42516159 4.50189481,7.59595119 L4.496704,7.75 L4.496704,17.25 C4.496704,18.440864 5.42186559,19.4156449 6.59265519,19.4948092 L6.746704,19.5 L16.247437,19.5 C17.438301,19.5 18.4130819,18.5748384 18.4922462,17.4040488 L18.497437,17.25 L18.497437,16.752219 C18.497437,16.3380054 18.8332234,16.002219 19.247437,16.002219 C19.6271328,16.002219 19.940928,16.2843728 19.9905904,16.6504484 L19.997437,16.752219 L19.997437,17.25 C19.997437,19.2542592 18.4250759,20.8912737 16.4465956,20.994802 L16.247437,21 L6.746704,21 C4.74244483,21 3.10543026,19.4276389 3.00190201,17.4491586 L2.996704,17.25 L2.996704,7.75 C2.996704,5.74574083 4.56906505,4.10872626 6.54754543,4.00519801 L6.746704,4 L10.2109085,4 L6.746704,4 Z M14.5006976,6.54430631 L14.5006976,3.75 C14.5006976,3.12602964 15.20748,2.7899466 15.6876724,3.13980165 L15.7698701,3.20874226 L21.7644714,8.95874226 C22.0442311,9.22708681 22.0696965,9.65811353 21.8408438,9.95607385 L21.7645584,10.0411742 L15.7699571,15.7930263 C15.3196822,16.2250675 14.5877784,15.9476738 14.5078455,15.3589039 L14.5006976,15.2518521 L14.5006976,12.4499835 L14.1799379,12.4437673 C11.5224061,12.4359053 9.2508447,13.5269198 7.31506917,15.745002 C6.81945864,16.3128907 5.88979801,15.876896 6.00952162,15.1327229 C6.83651469,9.99233371 9.60859008,7.08827771 14.1987622,6.57442791 L14.5006976,6.54430631 L14.5006976,3.75 L14.5006976,6.54430631 Z" fill="#f5f5f5"/>
                      </svg>
                    </div>
                  </div>
                  <div className="border-t border-b w-full p-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
                    <div className="flex flex-1 gap-2 items-center">
                      <span className="w-full btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
                          Оставить комментарий
                      </span>
                    </div>
                  </div>
              </div>
              
              {/* Card 2 */}
              <div className="rounded-2xl bg-gray-900/90 mb-5">
                <Spotlight className="group mx-auto flex max-w-sm flex-col items-start gap-5 lg:max-w-none">
                  <a
                    className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                    href="#0"
                  >
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      {/* Arrow */}
                      <div
                        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={8}
                          fill="none"
                        >
                          <path
                            fill="#F4F4F5"
                            d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                          />
                        </svg>
                      </div>
                      <div className="block md:flex">
                        {/* Image */}
                        <Image
                          className="inline-flex w-full h-[100px] md:w-[250px] md:h-[150px] object-contain"
                          src={WorflowImg01}
                          alt="Workflow 01"
                        />
                        {/* Content */}
                        <div className="p-6">
                          <div className="mb-3">
                            <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                              <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                Новость2
                              </span>
                            </span>
                          </div>
                          <p className="text-indigo-200/65">
                            Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие!
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  </Spotlight>
                  <div className="w-full flex gap-8 justify-center pt-5 pb-5">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0556 9.00391C15.5164 7.57689 15.7491 6.32772 15.7491 5.25064C15.7491 2.85197 14.81 1.00323 13.2491 1.00323C12.4023 1.00323 12.1402 1.50747 11.8123 2.75005C11.8295 2.68512 11.6494 3.38401 11.5968 3.57126C11.4958 3.93 11.32 4.54075 11.0697 5.40227C11.063 5.42535 11.0532 5.4471 11.0403 5.46718L8.17359 9.95284C7.49554 11.0138 6.49507 11.8293 5.31919 12.2795L4.06196 12.7609C3.26859 13.0646 2.80797 13.8943 2.96968 14.7283L3.65584 18.267C3.82298 19.1289 4.47629 19.815 5.32909 20.024L13.5786 22.0459C16.1098 22.6663 18.6682 21.1314 19.3121 18.606L20.886 12.4333C21.2612 10.9616 20.3723 9.46441 18.9007 9.08916C18.6786 9.03255 18.4504 9.00391 18.2212 9.00391H15.0556Z" fill="#f5f5f5"/>
                      </svg>
                    </div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0556 14.1829C15.5164 15.6099 15.7491 16.859 15.7491 17.9361C15.7491 20.3348 14.81 22.1835 13.2491 22.1835C12.4493 22.1835 12.1712 21.7338 11.8665 20.637L11.5968 19.6155C11.4958 19.2568 11.32 18.646 11.0697 17.7845C11.063 17.7614 11.0532 17.7397 11.0403 17.7196L8.17359 13.2339C7.49554 12.173 6.49507 11.3575 5.31919 10.9073L4.06196 10.4259C3.26859 10.1221 2.80797 9.29247 2.96968 8.45847L3.65584 4.9198C3.82298 4.05781 4.47629 3.3718 5.32909 3.16278L13.5786 1.14085C16.1098 0.520459 18.6682 2.05539 19.3121 4.58072L20.886 10.7534C21.2612 12.2251 20.3723 13.7224 18.9007 14.0976C18.6786 14.1542 18.4504 14.1829 18.2212 14.1829H15.0556Z" fill="#f5f5f5"/>
                      </svg>
                    </div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.746704,4 L10.2109085,4 C10.625122,4 10.9609085,4.33578644 10.9609085,4.75 C10.9609085,5.12969577 10.6787546,5.44349096 10.312679,5.49315338 L10.2109085,5.5 L6.746704,5.5 C5.55584001,5.5 4.58105908,6.42516159 4.50189481,7.59595119 L4.496704,7.75 L4.496704,17.25 C4.496704,18.440864 5.42186559,19.4156449 6.59265519,19.4948092 L6.746704,19.5 L16.247437,19.5 C17.438301,19.5 18.4130819,18.5748384 18.4922462,17.4040488 L18.497437,17.25 L18.497437,16.752219 C18.497437,16.3380054 18.8332234,16.002219 19.247437,16.002219 C19.6271328,16.002219 19.940928,16.2843728 19.9905904,16.6504484 L19.997437,16.752219 L19.997437,17.25 C19.997437,19.2542592 18.4250759,20.8912737 16.4465956,20.994802 L16.247437,21 L6.746704,21 C4.74244483,21 3.10543026,19.4276389 3.00190201,17.4491586 L2.996704,17.25 L2.996704,7.75 C2.996704,5.74574083 4.56906505,4.10872626 6.54754543,4.00519801 L6.746704,4 L10.2109085,4 L6.746704,4 Z M14.5006976,6.54430631 L14.5006976,3.75 C14.5006976,3.12602964 15.20748,2.7899466 15.6876724,3.13980165 L15.7698701,3.20874226 L21.7644714,8.95874226 C22.0442311,9.22708681 22.0696965,9.65811353 21.8408438,9.95607385 L21.7645584,10.0411742 L15.7699571,15.7930263 C15.3196822,16.2250675 14.5877784,15.9476738 14.5078455,15.3589039 L14.5006976,15.2518521 L14.5006976,12.4499835 L14.1799379,12.4437673 C11.5224061,12.4359053 9.2508447,13.5269198 7.31506917,15.745002 C6.81945864,16.3128907 5.88979801,15.876896 6.00952162,15.1327229 C6.83651469,9.99233371 9.60859008,7.08827771 14.1987622,6.57442791 L14.5006976,6.54430631 L14.5006976,3.75 L14.5006976,6.54430631 Z" fill="#f5f5f5"/>
                      </svg>
                    </div>
                  </div>
                  <div className="border-t border-b w-full p-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
                    <div className="flex flex-1 gap-2 items-center">
                      <span className="w-full btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
                          Оставить комментарий
                      </span>
                    </div>
                  </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-gray-900/90">
                <Spotlight className="group mx-auto flex max-w-sm flex-col items-start gap-5 lg:max-w-none">
                  <a
                    className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                    href="#0"
                  >
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      {/* Arrow */}
                      <div
                        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={8}
                          fill="none"
                        >
                          <path
                            fill="#F4F4F5"
                            d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                          />
                        </svg>
                      </div>
                      <div className="block md:flex">
                        {/* Image */}
                        <Image
                          className="inline-flex w-full h-[100px] md:w-[250px] md:h-[150px] object-contain"
                          src={WorflowImg01}
                          alt="Workflow 01"
                        />
                        {/* Content */}
                        <div className="p-6">
                          <div className="mb-3">
                            <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                              <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                Новость3
                              </span>
                            </span>
                          </div>
                          <p className="text-indigo-200/65">
                            Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие!
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  </Spotlight>
                  <div className="w-full flex gap-8 justify-center pt-5 pb-5">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0556 9.00391C15.5164 7.57689 15.7491 6.32772 15.7491 5.25064C15.7491 2.85197 14.81 1.00323 13.2491 1.00323C12.4023 1.00323 12.1402 1.50747 11.8123 2.75005C11.8295 2.68512 11.6494 3.38401 11.5968 3.57126C11.4958 3.93 11.32 4.54075 11.0697 5.40227C11.063 5.42535 11.0532 5.4471 11.0403 5.46718L8.17359 9.95284C7.49554 11.0138 6.49507 11.8293 5.31919 12.2795L4.06196 12.7609C3.26859 13.0646 2.80797 13.8943 2.96968 14.7283L3.65584 18.267C3.82298 19.1289 4.47629 19.815 5.32909 20.024L13.5786 22.0459C16.1098 22.6663 18.6682 21.1314 19.3121 18.606L20.886 12.4333C21.2612 10.9616 20.3723 9.46441 18.9007 9.08916C18.6786 9.03255 18.4504 9.00391 18.2212 9.00391H15.0556Z" fill="#f5f5f5"/>
                      </svg>
                    </div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0556 14.1829C15.5164 15.6099 15.7491 16.859 15.7491 17.9361C15.7491 20.3348 14.81 22.1835 13.2491 22.1835C12.4493 22.1835 12.1712 21.7338 11.8665 20.637L11.5968 19.6155C11.4958 19.2568 11.32 18.646 11.0697 17.7845C11.063 17.7614 11.0532 17.7397 11.0403 17.7196L8.17359 13.2339C7.49554 12.173 6.49507 11.3575 5.31919 10.9073L4.06196 10.4259C3.26859 10.1221 2.80797 9.29247 2.96968 8.45847L3.65584 4.9198C3.82298 4.05781 4.47629 3.3718 5.32909 3.16278L13.5786 1.14085C16.1098 0.520459 18.6682 2.05539 19.3121 4.58072L20.886 10.7534C21.2612 12.2251 20.3723 13.7224 18.9007 14.0976C18.6786 14.1542 18.4504 14.1829 18.2212 14.1829H15.0556Z" fill="#f5f5f5"/>
                      </svg>
                    </div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.746704,4 L10.2109085,4 C10.625122,4 10.9609085,4.33578644 10.9609085,4.75 C10.9609085,5.12969577 10.6787546,5.44349096 10.312679,5.49315338 L10.2109085,5.5 L6.746704,5.5 C5.55584001,5.5 4.58105908,6.42516159 4.50189481,7.59595119 L4.496704,7.75 L4.496704,17.25 C4.496704,18.440864 5.42186559,19.4156449 6.59265519,19.4948092 L6.746704,19.5 L16.247437,19.5 C17.438301,19.5 18.4130819,18.5748384 18.4922462,17.4040488 L18.497437,17.25 L18.497437,16.752219 C18.497437,16.3380054 18.8332234,16.002219 19.247437,16.002219 C19.6271328,16.002219 19.940928,16.2843728 19.9905904,16.6504484 L19.997437,16.752219 L19.997437,17.25 C19.997437,19.2542592 18.4250759,20.8912737 16.4465956,20.994802 L16.247437,21 L6.746704,21 C4.74244483,21 3.10543026,19.4276389 3.00190201,17.4491586 L2.996704,17.25 L2.996704,7.75 C2.996704,5.74574083 4.56906505,4.10872626 6.54754543,4.00519801 L6.746704,4 L10.2109085,4 L6.746704,4 Z M14.5006976,6.54430631 L14.5006976,3.75 C14.5006976,3.12602964 15.20748,2.7899466 15.6876724,3.13980165 L15.7698701,3.20874226 L21.7644714,8.95874226 C22.0442311,9.22708681 22.0696965,9.65811353 21.8408438,9.95607385 L21.7645584,10.0411742 L15.7699571,15.7930263 C15.3196822,16.2250675 14.5877784,15.9476738 14.5078455,15.3589039 L14.5006976,15.2518521 L14.5006976,12.4499835 L14.1799379,12.4437673 C11.5224061,12.4359053 9.2508447,13.5269198 7.31506917,15.745002 C6.81945864,16.3128907 5.88979801,15.876896 6.00952162,15.1327229 C6.83651469,9.99233371 9.60859008,7.08827771 14.1987622,6.57442791 L14.5006976,6.54430631 L14.5006976,3.75 L14.5006976,6.54430631 Z" fill="#f5f5f5"/>
                      </svg>
                    </div>
                  </div>
                  <div className="border-t border-b w-full p-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
                    <div className="flex flex-1 gap-2 items-center">
                      <span className="w-full btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
                          Оставить комментарий
                      </span>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          {/* Посты */}
          <div className="text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Посты
            </h1>
            <div className="mx-auto max-w-3xl">
              {/* Card 1 */}
              <div className="rounded-2xl bg-gray-900/90 mb-5">
                <Spotlight className="group mx-auto flex max-w-sm flex-col items-start gap-5 lg:max-w-none">
              
                  <a
                    className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                    href="#0"
                  >
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      {/* Arrow */}
                      <div
                        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={8}
                          fill="none"
                        >
                          <path
                            fill="#F4F4F5"
                            d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                          />
                        </svg>
                      </div>
                      {/* Image */}
                      <Image
                        className="inline-flex"
                        src={WorflowImg01}
                        width={350}
                        height={288}
                        alt="Workflow 03"
                      />
                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                            <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent ">
                              Пост1
                            </span>
                          </span>
                        </div>
                        <p className="text-indigo-200/65">
                          Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие!
                        </p>
                      </div>
                    </div>
                  </a>
                </Spotlight>
              
                <div className="w-full flex gap-8 justify-center pt-5 pb-5">
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0556 9.00391C15.5164 7.57689 15.7491 6.32772 15.7491 5.25064C15.7491 2.85197 14.81 1.00323 13.2491 1.00323C12.4023 1.00323 12.1402 1.50747 11.8123 2.75005C11.8295 2.68512 11.6494 3.38401 11.5968 3.57126C11.4958 3.93 11.32 4.54075 11.0697 5.40227C11.063 5.42535 11.0532 5.4471 11.0403 5.46718L8.17359 9.95284C7.49554 11.0138 6.49507 11.8293 5.31919 12.2795L4.06196 12.7609C3.26859 13.0646 2.80797 13.8943 2.96968 14.7283L3.65584 18.267C3.82298 19.1289 4.47629 19.815 5.32909 20.024L13.5786 22.0459C16.1098 22.6663 18.6682 21.1314 19.3121 18.606L20.886 12.4333C21.2612 10.9616 20.3723 9.46441 18.9007 9.08916C18.6786 9.03255 18.4504 9.00391 18.2212 9.00391H15.0556Z" fill="#f5f5f5"/>
                    </svg>
                  </div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0556 14.1829C15.5164 15.6099 15.7491 16.859 15.7491 17.9361C15.7491 20.3348 14.81 22.1835 13.2491 22.1835C12.4493 22.1835 12.1712 21.7338 11.8665 20.637L11.5968 19.6155C11.4958 19.2568 11.32 18.646 11.0697 17.7845C11.063 17.7614 11.0532 17.7397 11.0403 17.7196L8.17359 13.2339C7.49554 12.173 6.49507 11.3575 5.31919 10.9073L4.06196 10.4259C3.26859 10.1221 2.80797 9.29247 2.96968 8.45847L3.65584 4.9198C3.82298 4.05781 4.47629 3.3718 5.32909 3.16278L13.5786 1.14085C16.1098 0.520459 18.6682 2.05539 19.3121 4.58072L20.886 10.7534C21.2612 12.2251 20.3723 13.7224 18.9007 14.0976C18.6786 14.1542 18.4504 14.1829 18.2212 14.1829H15.0556Z" fill="#f5f5f5"/>
                    </svg>
                  </div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.746704,4 L10.2109085,4 C10.625122,4 10.9609085,4.33578644 10.9609085,4.75 C10.9609085,5.12969577 10.6787546,5.44349096 10.312679,5.49315338 L10.2109085,5.5 L6.746704,5.5 C5.55584001,5.5 4.58105908,6.42516159 4.50189481,7.59595119 L4.496704,7.75 L4.496704,17.25 C4.496704,18.440864 5.42186559,19.4156449 6.59265519,19.4948092 L6.746704,19.5 L16.247437,19.5 C17.438301,19.5 18.4130819,18.5748384 18.4922462,17.4040488 L18.497437,17.25 L18.497437,16.752219 C18.497437,16.3380054 18.8332234,16.002219 19.247437,16.002219 C19.6271328,16.002219 19.940928,16.2843728 19.9905904,16.6504484 L19.997437,16.752219 L19.997437,17.25 C19.997437,19.2542592 18.4250759,20.8912737 16.4465956,20.994802 L16.247437,21 L6.746704,21 C4.74244483,21 3.10543026,19.4276389 3.00190201,17.4491586 L2.996704,17.25 L2.996704,7.75 C2.996704,5.74574083 4.56906505,4.10872626 6.54754543,4.00519801 L6.746704,4 L10.2109085,4 L6.746704,4 Z M14.5006976,6.54430631 L14.5006976,3.75 C14.5006976,3.12602964 15.20748,2.7899466 15.6876724,3.13980165 L15.7698701,3.20874226 L21.7644714,8.95874226 C22.0442311,9.22708681 22.0696965,9.65811353 21.8408438,9.95607385 L21.7645584,10.0411742 L15.7699571,15.7930263 C15.3196822,16.2250675 14.5877784,15.9476738 14.5078455,15.3589039 L14.5006976,15.2518521 L14.5006976,12.4499835 L14.1799379,12.4437673 C11.5224061,12.4359053 9.2508447,13.5269198 7.31506917,15.745002 C6.81945864,16.3128907 5.88979801,15.876896 6.00952162,15.1327229 C6.83651469,9.99233371 9.60859008,7.08827771 14.1987622,6.57442791 L14.5006976,6.54430631 L14.5006976,3.75 L14.5006976,6.54430631 Z" fill="#f5f5f5"/>
                    </svg>
                  </div>
                </div>
                <div className="border-t border-b w-full p-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
                  <div className="flex flex-1 gap-2 items-center">
                    <span className="w-full btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
                        Оставить комментарий
                    </span>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="rounded-2xl bg-gray-900/90 mb-5">
                <Spotlight className="group mx-auto flex max-w-sm flex-col items-start gap-5 lg:max-w-none">
              
                  <a
                    className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                    href="#0"
                  >
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      {/* Arrow */}
                      <div
                        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={8}
                          fill="none"
                        >
                          <path
                            fill="#F4F4F5"
                            d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                          />
                        </svg>
                      </div>
                      {/* Image */}
                      <Image
                        className="inline-flex"
                        src={WorflowImg01}
                        width={350}
                        height={288}
                        alt="Workflow 03"
                      />
                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                            <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent ">
                              Пост2
                            </span>
                          </span>
                        </div>
                        <p className="text-indigo-200/65">
                          Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие!
                        </p>
                      </div>
                    </div>
                  </a>
                </Spotlight>
              
                <div className="w-full flex gap-8 justify-center pt-5 pb-5">
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0556 9.00391C15.5164 7.57689 15.7491 6.32772 15.7491 5.25064C15.7491 2.85197 14.81 1.00323 13.2491 1.00323C12.4023 1.00323 12.1402 1.50747 11.8123 2.75005C11.8295 2.68512 11.6494 3.38401 11.5968 3.57126C11.4958 3.93 11.32 4.54075 11.0697 5.40227C11.063 5.42535 11.0532 5.4471 11.0403 5.46718L8.17359 9.95284C7.49554 11.0138 6.49507 11.8293 5.31919 12.2795L4.06196 12.7609C3.26859 13.0646 2.80797 13.8943 2.96968 14.7283L3.65584 18.267C3.82298 19.1289 4.47629 19.815 5.32909 20.024L13.5786 22.0459C16.1098 22.6663 18.6682 21.1314 19.3121 18.606L20.886 12.4333C21.2612 10.9616 20.3723 9.46441 18.9007 9.08916C18.6786 9.03255 18.4504 9.00391 18.2212 9.00391H15.0556Z" fill="#f5f5f5"/>
                    </svg>
                  </div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0556 14.1829C15.5164 15.6099 15.7491 16.859 15.7491 17.9361C15.7491 20.3348 14.81 22.1835 13.2491 22.1835C12.4493 22.1835 12.1712 21.7338 11.8665 20.637L11.5968 19.6155C11.4958 19.2568 11.32 18.646 11.0697 17.7845C11.063 17.7614 11.0532 17.7397 11.0403 17.7196L8.17359 13.2339C7.49554 12.173 6.49507 11.3575 5.31919 10.9073L4.06196 10.4259C3.26859 10.1221 2.80797 9.29247 2.96968 8.45847L3.65584 4.9198C3.82298 4.05781 4.47629 3.3718 5.32909 3.16278L13.5786 1.14085C16.1098 0.520459 18.6682 2.05539 19.3121 4.58072L20.886 10.7534C21.2612 12.2251 20.3723 13.7224 18.9007 14.0976C18.6786 14.1542 18.4504 14.1829 18.2212 14.1829H15.0556Z" fill="#f5f5f5"/>
                    </svg>
                  </div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.746704,4 L10.2109085,4 C10.625122,4 10.9609085,4.33578644 10.9609085,4.75 C10.9609085,5.12969577 10.6787546,5.44349096 10.312679,5.49315338 L10.2109085,5.5 L6.746704,5.5 C5.55584001,5.5 4.58105908,6.42516159 4.50189481,7.59595119 L4.496704,7.75 L4.496704,17.25 C4.496704,18.440864 5.42186559,19.4156449 6.59265519,19.4948092 L6.746704,19.5 L16.247437,19.5 C17.438301,19.5 18.4130819,18.5748384 18.4922462,17.4040488 L18.497437,17.25 L18.497437,16.752219 C18.497437,16.3380054 18.8332234,16.002219 19.247437,16.002219 C19.6271328,16.002219 19.940928,16.2843728 19.9905904,16.6504484 L19.997437,16.752219 L19.997437,17.25 C19.997437,19.2542592 18.4250759,20.8912737 16.4465956,20.994802 L16.247437,21 L6.746704,21 C4.74244483,21 3.10543026,19.4276389 3.00190201,17.4491586 L2.996704,17.25 L2.996704,7.75 C2.996704,5.74574083 4.56906505,4.10872626 6.54754543,4.00519801 L6.746704,4 L10.2109085,4 L6.746704,4 Z M14.5006976,6.54430631 L14.5006976,3.75 C14.5006976,3.12602964 15.20748,2.7899466 15.6876724,3.13980165 L15.7698701,3.20874226 L21.7644714,8.95874226 C22.0442311,9.22708681 22.0696965,9.65811353 21.8408438,9.95607385 L21.7645584,10.0411742 L15.7699571,15.7930263 C15.3196822,16.2250675 14.5877784,15.9476738 14.5078455,15.3589039 L14.5006976,15.2518521 L14.5006976,12.4499835 L14.1799379,12.4437673 C11.5224061,12.4359053 9.2508447,13.5269198 7.31506917,15.745002 C6.81945864,16.3128907 5.88979801,15.876896 6.00952162,15.1327229 C6.83651469,9.99233371 9.60859008,7.08827771 14.1987622,6.57442791 L14.5006976,6.54430631 L14.5006976,3.75 L14.5006976,6.54430631 Z" fill="#f5f5f5"/>
                    </svg>
                  </div>
                </div>
                <div className="border-t border-b w-full p-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
                  <div className="flex flex-1 gap-2 items-center">
                    <span className="w-full btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
                        Оставить комментарий
                    </span>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="rounded-2xl bg-gray-900/90">
                <Spotlight className="group mx-auto flex max-w-sm flex-col items-start gap-5 lg:max-w-none">
              
                  <a
                    className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                    href="#0"
                  >
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      {/* Arrow */}
                      <div
                        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={8}
                          fill="none"
                        >
                          <path
                            fill="#F4F4F5"
                            d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                          />
                        </svg>
                      </div>
                      {/* Image */}
                      <Image
                        className="inline-flex"
                        src={WorflowImg01}
                        width={350}
                        height={288}
                        alt="Workflow 03"
                      />
                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                            <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent ">
                              Пост3
                            </span>
                          </span>
                        </div>
                        <p className="text-indigo-200/65">
                          Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие! Очень много, что изменили, вы точно охренеете, это безумие!
                        </p>
                      </div>
                    </div>
                  </a>
                </Spotlight>
              
                <div className="w-full flex gap-8 justify-center pt-5 pb-5">
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0556 9.00391C15.5164 7.57689 15.7491 6.32772 15.7491 5.25064C15.7491 2.85197 14.81 1.00323 13.2491 1.00323C12.4023 1.00323 12.1402 1.50747 11.8123 2.75005C11.8295 2.68512 11.6494 3.38401 11.5968 3.57126C11.4958 3.93 11.32 4.54075 11.0697 5.40227C11.063 5.42535 11.0532 5.4471 11.0403 5.46718L8.17359 9.95284C7.49554 11.0138 6.49507 11.8293 5.31919 12.2795L4.06196 12.7609C3.26859 13.0646 2.80797 13.8943 2.96968 14.7283L3.65584 18.267C3.82298 19.1289 4.47629 19.815 5.32909 20.024L13.5786 22.0459C16.1098 22.6663 18.6682 21.1314 19.3121 18.606L20.886 12.4333C21.2612 10.9616 20.3723 9.46441 18.9007 9.08916C18.6786 9.03255 18.4504 9.00391 18.2212 9.00391H15.0556Z" fill="#f5f5f5"/>
                    </svg>
                  </div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0556 14.1829C15.5164 15.6099 15.7491 16.859 15.7491 17.9361C15.7491 20.3348 14.81 22.1835 13.2491 22.1835C12.4493 22.1835 12.1712 21.7338 11.8665 20.637L11.5968 19.6155C11.4958 19.2568 11.32 18.646 11.0697 17.7845C11.063 17.7614 11.0532 17.7397 11.0403 17.7196L8.17359 13.2339C7.49554 12.173 6.49507 11.3575 5.31919 10.9073L4.06196 10.4259C3.26859 10.1221 2.80797 9.29247 2.96968 8.45847L3.65584 4.9198C3.82298 4.05781 4.47629 3.3718 5.32909 3.16278L13.5786 1.14085C16.1098 0.520459 18.6682 2.05539 19.3121 4.58072L20.886 10.7534C21.2612 12.2251 20.3723 13.7224 18.9007 14.0976C18.6786 14.1542 18.4504 14.1829 18.2212 14.1829H15.0556Z" fill="#f5f5f5"/>
                    </svg>
                  </div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.746704,4 L10.2109085,4 C10.625122,4 10.9609085,4.33578644 10.9609085,4.75 C10.9609085,5.12969577 10.6787546,5.44349096 10.312679,5.49315338 L10.2109085,5.5 L6.746704,5.5 C5.55584001,5.5 4.58105908,6.42516159 4.50189481,7.59595119 L4.496704,7.75 L4.496704,17.25 C4.496704,18.440864 5.42186559,19.4156449 6.59265519,19.4948092 L6.746704,19.5 L16.247437,19.5 C17.438301,19.5 18.4130819,18.5748384 18.4922462,17.4040488 L18.497437,17.25 L18.497437,16.752219 C18.497437,16.3380054 18.8332234,16.002219 19.247437,16.002219 C19.6271328,16.002219 19.940928,16.2843728 19.9905904,16.6504484 L19.997437,16.752219 L19.997437,17.25 C19.997437,19.2542592 18.4250759,20.8912737 16.4465956,20.994802 L16.247437,21 L6.746704,21 C4.74244483,21 3.10543026,19.4276389 3.00190201,17.4491586 L2.996704,17.25 L2.996704,7.75 C2.996704,5.74574083 4.56906505,4.10872626 6.54754543,4.00519801 L6.746704,4 L10.2109085,4 L6.746704,4 Z M14.5006976,6.54430631 L14.5006976,3.75 C14.5006976,3.12602964 15.20748,2.7899466 15.6876724,3.13980165 L15.7698701,3.20874226 L21.7644714,8.95874226 C22.0442311,9.22708681 22.0696965,9.65811353 21.8408438,9.95607385 L21.7645584,10.0411742 L15.7699571,15.7930263 C15.3196822,16.2250675 14.5877784,15.9476738 14.5078455,15.3589039 L14.5006976,15.2518521 L14.5006976,12.4499835 L14.1799379,12.4437673 C11.5224061,12.4359053 9.2508447,13.5269198 7.31506917,15.745002 C6.81945864,16.3128907 5.88979801,15.876896 6.00952162,15.1327229 C6.83651469,9.99233371 9.60859008,7.08827771 14.1987622,6.57442791 L14.5006976,6.54430631 L14.5006976,3.75 L14.5006976,6.54430631 Z" fill="#f5f5f5"/>
                    </svg>
                  </div>
                </div>
                <div className="border-t border-b w-full p-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
                  <div className="flex flex-1 gap-2 items-center">
                    <span className="w-full btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
                        Оставить комментарий
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
