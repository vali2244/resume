import  Project1 from "../../../assets/project1.png"
import  Project2 from "../../../assets/project2.png"
import  Project3 from "../../../assets/project3.png"
import  Project4 from "../../../assets/project4.png"
import  Project5 from "../../../assets/project5.png"
import  Project6 from "../../../assets/project6.png"

const Home = () => {
    return (
        <>
        <div className="w-full h-screen  justify-evenly flex items-center phone:flex phone:flex-col phone:items-center phone:justify-center ">
        <div className="w-[50%] h-5/6  flex items-end justify-end phone:flex phone:items-center phone:justify-center phone:w-full phone:h-[50%] ">
        <img className='w-[350px] h-[480px] phone:w-full phone:h-[400px]  phone:flex phone:items-center phone:justify-center' src="https://vishal-resume.vercel.app/assets/me1.avif" alt="" />
        
        </div>
        <div className="w-[40%] h-5/6 gap-5 flex items-center  justify-center flex-col phone:gap-4">
        <span className='text-slate-400 font-bold text-lg font-display'>Hello, I'm</span>
        <span className='text-6xl font-bold font-sans phone:text-4xl' >Babavali Syed</span>
        <span className='text-4xl font-bold text-slate-500 phone:text-[20px] phone:font-bold'>MERN Stack Developer</span>
        
        <button type="button" class="py-2.5 px-5 mr-2  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-red-600-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 phone:w-[120] phone:h-[40px]">Download CV</button>
        
        <span className='w-1/3 h-10  flex items-center justify-evenly  phone:w-[60%] phone:h-[10%]  phone:gap-3'><i class="fa-brands fa-linkedin-in w-12 h-12 bg-black flex items-center justify-center text-3xl text-white rounded-full"></i>
        <a href="https://github.com/vali2244">
        <i class=" text-5xl  fa-brands fa-github" ></i>
        </a>
        </span>
        </div>
        </div>
        <div className="w-full h-[590px]   flex flex-col  ">
        <div className='w-full h-[150px]   flex items-center justify-center flex-col  '>
        <span className=''>Get To Know More</span>
        <span id="about" className='text-gray-800  text-5xl font-bold font-sans phone:text-[45px] phone:font-bold'>About Me</span>
        </div>
        <div className='w-full h-5/6 flex phone:flex phone:flex-col '>
        <div className="w-[50%] h-90  flex items-center justify-center   phone:w-[100%] phone:h-[350px] phone:flex phone:items-center phone:justify-center">
        <img className='w-2/1 h-[350px] flex items-center justify-center phone:w-[] phone:h-[350px] phone:flex phone:items-center phone:justify-center' src="https://vishal-resume.vercel.app/assets/me2.avif" alt="" />
        </div>
        <div className="w-[50%] h-[100%] phone:w-full phone:h-[80%]  phone:flex phone:flex-col phone:items-center phone:justify-center phone:gap-5">
        <div className="w-[80%] h-[150px]  flex items-center justify-center flex-col rounded-2xl mt-24 ml-2 border-2 border-gray-300 phone:w-[40%] phone:h-[100px]  phone:flex phone:items-center phone:justify-center">
        <img   className='w-[40px] h-[40px] phone:w-[20px] phone:h-[20px]'   src="https://vishal-resume.vercel.app/assets/experience.png" alt="" />
        <span className='text-black font-bold text-lg phone:w-[25px] phone:flex phone:items-center phone:justify-center'>Experience</span>
        <span className='text-lg phone:text-[15px]'>2+ years</span>
        <span className='text-lg phone:text-[15px] phone:flex phone:items-center phone:justify-center'>MERN Development</span>
        </div>
        <div className="flex items-center justify-center w-[90%] h-[80px]">
        <div className="phone:w-full phone:h-[100px]  phone:text-[15px] phone:text-center">
        <p className=' '>As a MERN stack developer at the age of 21, you possess an exceptional level of dedication, passion, and ambition within the software development field. Your early immersion in this technology stack showcases your drive to excel and embrace emerging technologies. Your unique position as a young developer allows you to bring fresh perspectives and adaptability to the table.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="w-full h-[140vh] phone:flex-col phone:w-full phone:h-screen phone:flex phone:items-center phone:justify-center ">
        <div className="w-full h-[150px] flex flex-col items-center justify-center phone:w-[100%] phone:h-[20px] phone:flex-col   phone:items-center phone:justify-center " >
        <span className='text-lg  '>Explore My</span>
        <span id='experiance' className=' text-gray-900 text-5xl font-bold phone:text-[40px] phone:font-bold '>Experience</span>
        </div>
        <div className=" w-full h-sereen flex items-center   justify-center">
        <div className="w-[80%] h-[620px]  mt-10 border-2 border-gray-500 rounded-3xl  items-center justify-center flex flex-col">
        <div className="w-[100%] h-[85px]  flex items-center justify-center phone:w-full phone:h-[40px] ">
        <span className='text-3xl text-gray-600 font-bold phone:text-[20px] phone:mt-10'>MERN Development</span>
        </div>
        <div className=" w-full h-[430px] flex  items-center justify-evenly phone:w-[100%] phone:h-[100%] phone:flex phone:items-center phone:justify-center  ">
        <div className=" w-[200px] h-[350px]  flex flex-col items-center justify-evenly phone:flex phone:items-center phone:justify-center phone:w-[25%] phone:h-[400px] ">
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px] phone:w-[20px] phone:h-[20px]' src="https://vishal-resume.vercel.app/assets/html.png" alt="" /></div>
        <div className='w-[60%] h-[100px] flex flex-col  '>
        <h1 className='text-2xl font-bold phone:text-[11px]'>HTML</h1>
        <span className='text-[20px] text-slate-900  phone:text-[10px]'> Experienced</span></div>
        </div>
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px]  phone:w-[20px] phone:h-[20px]' src="https://vishal-resume.vercel.app/assets/mongo.png" alt="" /></div>
        <div className='w-[70%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>Mongo-DB</h1>
        
        <span className='text-[20px] text-slate-900  phone:text-[10px]'> Intermediate</span></div>
        </div>
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px]  phone:w-[20px] phone:h-[20px]' src="https://vishal-resume.vercel.app/assets/linux.jpg" alt="" /></div>
        <div className='w-[60%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>Linux</h1>
        <span className='text-[20px] text-slate-900 phone:text-[10px]'>  Intermediate</span></div>
        </div>
        </div>
        <div className=" w-[200px] h-[350px]  flex flex-col items-center justify-evenly phone:w-[25%] phone:h-[400px] phone:flex phone:items-center phone:justify-center ">
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px] phone:w-[20px] phone:h-[20px]' src="https://vishal-resume.vercel.app/assets/css.png" alt="" /></div>
        <div className='w-[60%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>CSS</h1>
        <span className='text-[20px] text-slate-900 phone:text-[10px]'> Experienced</span></div>
        </div>
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px] phone:w-[20px] phone:h-[20px]' src="https://vishal-resume.vercel.app/assets/tailwind.png" alt="" /></div>
        <div className='w-[70%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>Tailwind</h1>
        
        <span className='text-[20px] text-slate-900 phone:text-[10px]'> Intermediate</span></div>
        </div>
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px] phone:w-[20px] phone:h-[20px] ' src="https://vishal-resume.vercel.app/assets/docker.png" alt="" /></div>
        <div className='w-[60%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>Docker</h1>
        <span className='text-[20px] text-slate-900 phone:text-[10px]'>  Intermediate</span></div>
        </div>
        </div>
        <div className=" w-[200px] h-[350px]  flex flex-col items-center justify-evenly phone:w-[22%] phone:h-[400px] phone:flex phone:items-center phone:justify-center">
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px]phone:w-[20px] phone:h-[20px] ' src="https://vishal-resume.vercel.app/assets/js.png" alt="" /></div>
        <div className='w-[60%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>JavaScript</h1>
        <span className='text-[20px] text-slate-900 phone:text-[10px]'> Expert</span></div>
        </div>
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px]phone:w-[20px] phone:h-[20px] ' src="https://vishal-resume.vercel.app/assets/ex.png" alt="" /></div>
        <div className='w-[70%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>Express</h1>
        
        <span className='text-[20px] text-slate-900 phone:text-[10px]'> Intermediate</span></div>
        </div>
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px] phone:w-[20px] phone:h-[20px] ' src="https://vishal-resume.vercel.app/assets/firebas.png" alt="" /></div>
        <div className='w-[60%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>Firebase</h1>
        <span className='text-[20px] text-slate-900 phone:text-[10px]'>  Intermediate</span></div>
        </div>
        </div>
        <div className=" w-[200px] h-[350px]  flex flex-col items-center justify-evenly phone:w-[24%] phone:h-[400px] phone:flex phone:items-center phone:justify-center ">
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px]  phone:w-[20px] phone:h-[20px]' src="https://vishal-resume.vercel.app/assets/react.jpg" alt="" /></div>
        <div className='w-[60%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>React</h1>
        <span className='text-[20px] text-slate-900 phone:text-[10px]'> Expert</span></div>
        </div>
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px]  phone:w-[20px] phone:h-[20px]' src="https://vishal-resume.vercel.app/assets/digi.png" alt="" /></div>
        <div className='w-[70%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>VPS</h1>
        
        <span className='text-[20px] text-slate-900 phone:text-[10px]'> Intermediate</span></div>
        </div>
        <div className="w-[200px] h-[100px]  flex ">
        <div className='w-[40%] h-[100px] flex items-start justify-center'>
        <img className='w-[40px] h-[40px] phone:w-[20px] phone:h-[20px] ' src="https://vishal-resume.vercel.app/assets/git.png" alt="" /></div>
        <div className='w-[60%] h-[100px] flex flex-col'>
        <h1 className='text-2xl font-bold phone:text-[11px]'>Git/GIthub</h1>
        <span className='text-[20px] text-slate-900 phone:text-[10px]'>  Intermediate</span></div>
        </div>
        </div>
        </div>
        <div className="w-full  h-[100px] flex items-center justify-center phone:w-full phone:h-[80px] phone:flex phone:items-center phone:justify-center  ">
        <div className='w-56 h-[100px]  flex items-start justify-end '>
        <img className='w-[80px] h-8 flex mt-2 mr-2  phone:w-[25px] phone:h-[25px]' src="https://vishal-resume.vercel.app/assets/ndoe.png" alt="" />
        </div>
        <div className='w-56 h-[100px] phone:w-full phone:h-32 '>
        <h1 className='text-3xl font-bold phone:text-[11px]'>Node -js</h1>
        <h3 className='text-[20px] text-slate-900 phone:text-[10px]'>Intermediate</h3>
        </div>
        </div>
        </div>
        
        </div>
        </div>
        <div className='w-[100%] h-[55vh] '>
        <div className="wfull h-[130px]  flex items-center justify-center flex-col">
        <span>Get in Touch
        
        </span>
        <span id='contact' className='text-5xl text-black font-sans font-bold '>Contact Me</span>
        </div>
        <div className=" w-full h-[140px] flex items-center justify-center phone:flex phone:items-center phone:justify-center ">
        <div className="w-[60%] h-[120px] flex items-center justify-evenly border-2 mt-4 border-gray-500 rounded-2xl phone:w-[85%] phone:h-[100px] phone:flex phone:items-center phone:justify-center ">
        <div className='w-[250px] h-[80px] flex items-center '>
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center ">
        <i class=" text-white text-2xl flex items-center justify-center  fa-solid fa-envelope absolute z-10"></i>
        <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'  className='ml-60 font-sans font-light hover:border-b-2 border-black text-lg phone:mr-7'>syedvali@gmail.com</a>
        </div>
        </div>
        <div className='w-[250px] flex items-center h-[80px] '>
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center  phone:ml-14    ">
        <i class="fa-brands fa-linkedin-in text-white text-2xl flex items-center justify-center   absolute z-10 "></i>
        <a href="https://www.linkedin.com/in/syed-babavali-43134a282" className='ml-40  font-sans font-light hover:border-b-2 border-black text-lg phone:mr-9 '>LinkedIn
        
        </a>
        </div>
        </div>
        <div className='w-[250px] flex items-center h-[80px] '>
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center phone:ml-5">
        <i class="fa-brands fa-linkedin-in text-white text-2xl flex items-center justify-center   absolute z-10"></i>
        <a href='https://www.instagram.com/' className='ml-40  font-sans font-light hover:border-b-2 border-black text-lg'>Instagram</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
        <div className="w-full bg-white h-[90px] flex items-center justify-evenly">
        <span id='projects' className='text-gray-900 text-6xl font-sans font-bold' >projects</span>
        </div>
        <div className="w-full h-[180vh] p-20 flex flex-wrap items-center justify-evenly phone:flex phone:items-center phone:justify-evenly phone:w-full phone:h-screen phone:flex-col">
        <div className=" flex items-center justify-center flex-col w-[28%] h-[450px] bg-white border-2  border-gray-500 rounded-xl phone:w-[30%] phone:h-[350px]">
        <img className='w-[70%] h-[60%]   object-fill rounded-2xl' src={Project1} alt="" />
        <span className='flex items-center justify-center mt-10 text-4xl font-sans font-bold phone:text-[16px]'>BUILDING TEAM</span>
        <a href='https://react-tailwind-css-webpages-6cv6.vercel.app/' type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-red-600-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-7">Live Demo</a>
        </div>
        
        <div className="w-[28%] h-[450px] flex items-center justify-center flex-col bg-white border-2  border-gray-500 rounded-xl phone:w-[30%] phone:h-[350px]">
        <img className='w-[70%] h-[60%]    object-fill rounded-2xl' src={Project2} alt="" />
        <span className='flex items-center justify-center mt-10 text-4xl font-sans font-bold phone:text-[16px]'>LOGIN PAGE</span>
        <a href='https://react-login-load-onclick-and-on-change-cqyv.vercel.app/' type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-red-600-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-7">Live Demo</a>
        
        </div>
        <div className="w-[28%] h-[450px] flex items-center justify-center flex-col bg-white border-2  border-gray-500 rounded-xl phone:w-[30%] phone:h-[350px]">
        <img className='w-[70%] h-[60%]   object-fill rounded-2xl' src={Project3} alt="" />
        <span className='flex items-center justify-center mt-10 text-4xl font-sans font-bold phone:text-[16px]'>FETCH API</span>
        <a href='https://react-fetch-api-data.vercel.app/' type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-red-600-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-7">Live Demo</a>
        </div>
        <div className="w-[28%] h-[450px] flex items-center justify-center flex-col bg-white border-2  border-gray-500 rounded-xl phone:w-[30%] phone:h-[350px]">
        <img className='w-[70%] h-[60%]   object-fill rounded-2xl' src={Project4} alt="" />
        <span className='flex items-center justify-center mt-10 text-4xl font-sans font-bold  phone:text-[16px] '>SETTIME OUT</span>
        <a href='https://java-practice-q91y.vercel.app/index.html' type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-red-600-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-7">Live Demo</a>
        
        </div>
        <div className="w-[28%] h-[450px] flex items-center justify-center flex-col  bg-white border-2  border-gray-500 rounded-xl phone:w-[30%] phone:h-[350px]">
        <img className='w-[70%] h-[60%]   object-fill rounded-2xl' src={Project5} alt="" />
        <span className='flex items-center justify-center mt-10 text-4xl font-sans font-bold phone:text-[16px]'>NEXT.JS</span>
        <a href='https://nextjs-sooty-one-46.vercel.app/' type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-red-600-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-7">Live Demo</a>
        
        </div>
        <div className="w-[28%] h-[450px] flex items-center justify-center flex-col bg-white border-2  border-gray-500 rounded-xl phone:w-[30%] phone:h-[350px]">
        <img className=' w-[70%] h-[60%]  object-fill  rounded-2xl phone:w-[90%] phone:h-[60%]' src={Project6} alt="" />
        <span className='flex items-center justify-center mt-10 text-4xl font-sans font-bold phone:text-[16px]'>SVELTEKIT.APP</span>
        <a href='https://sveltekit-1-flame-two.vercel.app/' type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-red-600-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-7">Live Demo</a>
        
        </div>
        
        </div>
        </>
        
        )
    }
    
    export default Home