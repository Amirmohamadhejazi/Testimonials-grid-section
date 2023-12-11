/* eslint-disable @next/next/no-img-element */
import { daniel, jeanette, jonathan, kira, patrick } from '../../public/images'
export default function Home() {
    const dataCarts: any = [
        {
            name: 'Daniel Clifford',
            image: daniel.src,
            title: `i received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined, I honestly feel I got every penny's worth.`,
            description:
                '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”',
            class: 'col-span-1 xl:col-span-2 bg-[#7541c8] text-white',
            id: 0,
        },
        {
            name: 'Jonathan Walters',
            image: jonathan.src,
            title: 'The Team was very supportive and kept me motivated',
            description:
                '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”',
            class: 'col-span-1 xl:col-span-1 bg-[#48556a] text-white',
            id: 1,
        },

        {
            name: 'Kira Whittle',
            image: kira.src,
            title: 'Such a life-changing experience. Highly recommended!',
            description:
                '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”',
            class: 'col-span-1 xl:col-span-1 xl:row-span-2 bg-white ',
            id: 2,
        },
        {
            name: 'Jeanette Harmon',
            image: jeanette.src,
            title: 'An overall wonderful and rewarding experience',
            description:
                '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
            class: 'col-span-1 xl:col-span-1 bg-white',
            id: 3,
        },
        {
            name: 'Patrick Abrams',
            image: patrick.src,
            title: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
            description:
                '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”',
            class: 'col-span-1 xl:col-span-2  bg-[#19212e] text-white',
            id: 4,
        },
    ]
    return (
        <div className='w-full min-h-screen   flex  items-center justify-center'>
            <div className='w-full grid grid-cols-1 xl:grid-cols-4 grid-rows-2 p-5  gap-8'>
                {dataCarts.map((itemsCart: any) => (
                    <div
                        className={`flex flex-col gap-2 rounded-md shadow-2xl p-3 justify-around ${itemsCart.class}`}
                        key={itemsCart.id}
                    >
                        <div className='flex items-center gap-4'>
                            <div className='w-16 h-16 rounded-full border-4  border-[#8b66c5] shadow-2xl'>
                                <img
                                    src={itemsCart.image}
                                    className='w-full  h-full object-cover rounded-full'
                                    alt=''
                                />
                            </div>
                            <div className='flex flex-col gap-1 font-semibold whitespace-nowrap'>
                                <span>{itemsCart.name}</span>
                                <span>Verified Graduate</span>
                            </div>
                        </div>

                        <span className=' text-xl font-bold '>{itemsCart.title}</span>
                        <span className='text-sm font-semibold '>{itemsCart.description}</span>
                    </div>
                ))}
                {/*  */}
            </div>
        </div>
    )
}
