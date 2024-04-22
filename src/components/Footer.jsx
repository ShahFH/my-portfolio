import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
function Footer() {
  return (
    <footer class="rounded-lg shadow m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="flex items-center mb-4 sm:mb-0">
                    {/*<img src="" class="h-8 mr-3" alt="Logo" />*/}
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Shah</span>
                </span>
                <ul class="flex items-center justify-center space-x-4 text-gray-500 sm:mb-0 px-4">
                    <li>
                        <a href='https://twitter.com/ShahFaisal_H' class="hover:underline">
                            <FaTwitter className="text-neutral-400 hover:text-neutral-50" />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/ShahFH' class="hover:underline">
                            <FaGithub className="text-neutral-400 hover:text-neutral-50" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/shah-faisal-h/' class="hover:underline">
                            <FaLinkedin className="text-neutral-400 hover:text-neutral-50" />
                        </a>
                    </li>
                </ul>

            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span  class="hover:underline">Shah Faisal</span>. All Rights Reserved. Kabul, Afghanistan</span>
        </div>
    </footer>


  )
}

export default Footer