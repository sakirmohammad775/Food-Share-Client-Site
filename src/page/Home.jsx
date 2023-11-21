import IntroImage from '../assets/images/intro.jpg'
import Container from '../components/ui/Container';

const Home = () => {
    return (

        <Container>

            <div className='flex my-32 gap-10 '>
                <div className='flex-[1] flex flex-col justify-between'>
                    <h1 className='text-7xl font-bold'>Quality Cleaning <br /> {' '} <span className='text-primary'>for Your Home</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam eos illo ducimus nobis nihil voluptates fugiat eum, debitis dolorem!</p>
                    <div>
                        <button className='btn btn-primary'>Book a service</button>
                        <button className='btn btn-ghost'>Read More</button>
                    </div>
                    <div className="divider"></div>
                    <div className='flex items-center gap-3'>
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://images.unsplash.com/photo-1700180205291-c482131d559b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://images.unsplash.com/photo-1700180205291-c482131d559b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://images.unsplash.com/photo-1700180205291-c482131d559b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://images.unsplash.com/photo-1700180205291-c482131d559b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            </div>
                        </div>
                        <p>Rated 5 out of by out Client</p>
                    </div>
                </div>
                <div className='flex-[1] h-[600px] bg-red-600'>
                    <img className='w-full h-full object-cover' src={IntroImage} alt="" />
                </div>

            </div>
        </Container>

    );
};

export default Home;