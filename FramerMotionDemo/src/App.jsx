import { useState } from 'react'
import './App.css'
import {color, motion, useScroll} from "motion/react"

function App() {

  const scrollYProgress = useScroll().scrollYProgress;
  return (
   <>
    <motion.h1 className="w-32 h-10 bg-blue-900 text-white flex justify-center rounded-xl"
      initial={{
        initial:0
      }}
      
      animate={{
        x:[0,700,700,0,0],
        y:[0,0,300,300,0],
        rotate:200
      }}

      transition={{
        delay:1,
        duration:10,
        repeat:Infinity,
        ease: 'anticipate'
      }}
    >
        Hello 
    </motion.h1>

    <motion.h1 className='w-48 h-12 rounded-xl'
      whileHover={{
        backgroundColor:'red',
        color:'white'
      }}

      whileTap={{
        scale:1.8
      }}

      drag
      whileDrag={{
        scale:0.8
      }}

      dragConstraints={{
        left:0,
        right:700,
        bottom:500,
        top:0,
      }}
    >
      Suscribe
    </motion.h1>


      <div>

        <motion.div 
        className='bg-red-700 w-full h-3 fixed top-0 left-0  origin-left'
        style={{
          scaleX:scrollYProgress
        }}
        > </motion.div>
        <h2>Dipesh Shrestha</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit sequi ipsum repellat distinctio ducimus deleniti quod ab corrupti voluptates placeat, pariatur delectus, accusamus nisi ex impedit sint ad? Unde?</p> <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos inventore suscipit, minima repellat culpa accusantium? Repellendus cupiditate porro consequatur obcaecati. Deserunt quos pariatur neque perferendis rerum vel <br /> <br /> <br /><br /> amet obcaecati magni sapiente, similique harum ut. Voluptatibus omnis autem possimus vitae? Dignissimos, incidunt! Vitae tempore sequi, veritatis consectetur incidunt vero quibusdam laudantium ipsa enim quidem architecto minima pariatur perspiciatis neque ullam, earum nisi iure alias animi, doloribus nesciunt iusto nemo magni! Deleniti aspernatur perferendis, consequuntur alias incidunt deserunt ab nostrum impedit exercitationem reprehenderit. Dolorem non quisquam recusandae dolore sequi aperiam eaque vero quia laborum, nihil pariatur autem molestiae qui iste nobis deleniti temporibus voluptate possimus laudantium distinctio beatae laboriosam <br /> <br /><br /> repellendus perspiciatis. Minima velit exercitationem optio possimus facilis blanditiis quisquam distinctio qui eos ratione voluptatum laudantium, ducimus cumque earum sint, reiciendis animi explicabo vel error molestiae ullam! Enim ratione nulla quasi rerum nam at quae, assumenda id repellendus! Quod ullam voluptates minima nam quibusdam rerum sapiente corporis ut, eligendi possimus quos iusto necessitatibus velit. Qui necessitatibus asperiores beatae rerum minus officia vitae dignissimos rem eos est. Consequuntur, aspernatur totam cumque magnam nemo obcaecati hic maiores ad voluptate voluptatibus dicta itaque expedita temporibus accusantium. Corporis placeat adipisci illo. Assumenda, est? Amet, deserunt voluptas.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos inventore suscipit, minima repellat culpa accusantium? Repellendus cupiditate porro consequatur obcaecati. Deserunt quos pariatur neque perferendis rerum vel <br /> <br /> <br /><br /> amet obcaecati magni sapiente, similique harum ut. Voluptatibus omnis autem possimus vitae? Dignissimos, incidunt! Vitae tempore sequi, veritatis consectetur incidunt vero quibusdam laudantium ipsa enim quidem architecto minima pariatur perspiciatis neque ullam, earum nisi iure alias animi, doloribus nesciunt iusto nemo magni! Deleniti aspernatur perferendis, consequuntur alias incidunt deserunt ab nostrum impedit exercitationem reprehenderit. Dolorem non quisquam recusandae dolore sequi aperiam eaque vero quia laborum, nihil pariatur autem molestiae qui iste nobis deleniti temporibus voluptate possimus laudantium distinctio beatae laboriosam <br /> <br /><br /> repellendus perspiciatis. Minima velit exercitationem optio possimus facilis blanditiis quisquam distinctio qui eos ratione voluptatum laudantium, ducimus cumque earum sint, reiciendis animi explicabo vel error molestiae ullam! Enim ratione nulla quasi rerum nam at quae, assumenda id repellendus! Quod ullam voluptates minima nam quibusdam rerum sapiente corporis ut, eligendi possimus quos iusto necessitatibus velit. Qui necessitatibus asperiores beatae rerum minus officia vitae dignissimos rem eos est. Consequuntur, aspernatur totam cumque magnam nemo obcaecati hic maiores ad voluptate voluptatibus dicta itaque expedita temporibus accusantium. Corporis placeat adipisci illo. Assumenda, est? Amet, deserunt voluptas.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos inventore suscipit, minima repellat culpa accusantium? Repellendus cupiditate porro consequatur obcaecati. Deserunt quos pariatur neque perferendis rerum vel <br /> <br /> <br /><br /> amet obcaecati magni sapiente, similique harum ut. Voluptatibus omnis autem possimus vitae? Dignissimos, incidunt! Vitae tempore sequi, veritatis consectetur incidunt vero quibusdam laudantium ipsa enim quidem architecto minima pariatur perspiciatis neque ullam, earum nisi iure alias animi, doloribus nesciunt iusto nemo magni! Deleniti aspernatur perferendis, consequuntur alias incidunt deserunt ab nostrum impedit exercitationem reprehenderit. Dolorem non quisquam recusandae dolore sequi aperiam eaque vero quia laborum, nihil pariatur autem molestiae qui iste nobis deleniti temporibus voluptate possimus laudantium distinctio beatae laboriosam <br /> <br /><br /> repellendus perspiciatis. Minima velit exercitationem optio possimus facilis blanditiis quisquam distinctio qui eos ratione voluptatum laudantium, ducimus cumque earum sint, reiciendis animi explicabo vel error molestiae ullam! Enim ratione nulla quasi rerum nam at quae, assumenda id repellendus! Quod ullam voluptates minima nam quibusdam rerum sapiente corporis ut, eligendi possimus quos iusto necessitatibus velit. Qui necessitatibus asperiores beatae rerum minus officia vitae dignissimos rem eos est. Consequuntur, aspernatur totam cumque magnam nemo obcaecati hic maiores ad voluptate voluptatibus dicta itaque expedita temporibus accusantium. Corporis placeat adipisci illo. Assumenda, est? Amet, deserunt voluptas.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos inventore suscipit, minima repellat culpa accusantium? Repellendus cupiditate porro consequatur obcaecati. Deserunt quos pariatur neque perferendis rerum vel <br /> <br /> <br /><br /> amet obcaecati magni sapiente, similique harum ut. Voluptatibus omnis autem possimus vitae? Dignissimos, incidunt! Vitae tempore sequi, veritatis consectetur incidunt vero quibusdam laudantium ipsa enim quidem architecto minima pariatur perspiciatis neque ullam, earum nisi iure alias animi, doloribus nesciunt iusto nemo magni! Deleniti aspernatur perferendis, consequuntur alias incidunt deserunt ab nostrum impedit exercitationem reprehenderit. Dolorem non quisquam recusandae dolore sequi aperiam eaque vero quia laborum, nihil pariatur autem molestiae qui iste nobis deleniti temporibus voluptate possimus laudantium distinctio beatae laboriosam <br /> <br /> <br />repellendus perspiciatis. Minima velit exercitationem optio possimus facilis blanditiis quisquam distinctio qui eos ratione voluptatum laudantium, ducimus cumque earum sint, reiciendis animi explicabo vel error molestiae ullam! Enim ratione nulla quasi rerum nam at quae, assumenda id repellendus! Quod ullam voluptates minima nam quibusdam rerum sapiente corporis ut, eligendi possimus quos iusto necessitatibus velit. Qui necessitatibus asperiores beatae rerum minus officia vitae dignissimos rem eos est. Consequuntur, aspernatur totam cumque magnam nemo obcaecati hic maiores ad voluptate voluptatibus dicta itaque expedita temporibus accusantium. Corporis placeat adipisci illo. Assumenda, est? Amet, deserunt voluptas.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos inventore suscipit, minima repellat culpa accusantium? Repellendus cupiditate porro consequatur obcaecati. Deserunt quos pariatur neque perferendis rerum vel <br /> <br /> <br /><br /> amet obcaecati magni sapiente, similique harum ut. Voluptatibus omnis autem possimus vitae? Dignissimos, incidunt! Vitae tempore sequi, veritatis consectetur incidunt vero quibusdam laudantium ipsa enim quidem architecto minima pariatur perspiciatis neque ullam, earum nisi iure alias animi, doloribus nesciunt iusto nemo magni! Deleniti aspernatur perferendis, consequuntur alias incidunt deserunt ab nostrum impedit exercitationem reprehenderit. Dolorem non quisquam recusandae dolore sequi aperiam eaque vero quia laborum, nihil pariatur autem molestiae qui iste nobis deleniti temporibus voluptate possimus laudantium distinctio beatae laboriosam <br /> <br /> <br /> repellendus perspiciatis. Minima velit exercitationem optio possimus facilis blanditiis quisquam distinctio qui eos ratione voluptatum laudantium, ducimus cumque earum sint, reiciendis animi explicabo vel error molestiae ullam! Enim ratione nulla quasi rerum nam at quae, assumenda id repellendus! Quod ullam voluptates minima nam quibusdam rerum sapiente corporis ut, eligendi possimus quos iusto necessitatibus velit. Qui necessitatibus asperiores beatae rerum minus officia vitae dignissimos rem eos est. Consequuntur, aspernatur totam cumque magnam nemo obcaecati hic maiores ad voluptate voluptatibus dicta itaque expedita temporibus accusantium. Corporis placeat adipisci illo. Assumenda, est? Amet, deserunt voluptas.</p>
      </div>
    </>
  )
}

export default App
