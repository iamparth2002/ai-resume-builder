import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between items-center shadow-md'>
             <Link to={'/dashboard'}>
             <div className='flex justify-center items-center gap-2 '>

            <img src='/robot.png' className='cursor-pointer' width={50} height={70} />
            <h1 className='font-bold text-3xl text-primary'>AI RESUME BUILDER</h1>
             </div>
            </Link>
            {isSignedIn ?
                <div className='flex gap-2 items-center'>
                    <Link to={'/dashboard'}>
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to={'/auth/sign-in'}>
                    <Button>Get Started</Button>
                </Link>
            }

        </div>
    )
}

export default Header