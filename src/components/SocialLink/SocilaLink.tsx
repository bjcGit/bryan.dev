import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <a href="https://linkedin.com" className="text-green-500 hover:text-green-300">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com" className="text-green-500 hover:text-green-300">
        <FaGithub size={30} />
      </a>
      <a href="https://twitter.com" className="text-green-500 hover:text-green-300">
        <FaTwitter size={30} />
      </a>
    </div>
  );
};
