import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'utils/firebase';
import Image from 'next/image';

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link href={'/'} className="hover:animate-pulse">
        <Image src={'/blom_logo.svg'} width={120} height={120} />
      </Link>
      <ul>
        {!user && (
          <Link legacyBehavior href={'/auth/login'}>
            <a className="classic_button">Join Now</a>
          </Link>
        )}
        {user && (
          <div>
            <Link href={'/dashboard'}>
              <img
                src={user.photoURL}
                alt="avatar"
                referrerPolicy="no
              "
                className="w-12 rounded-full"
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
