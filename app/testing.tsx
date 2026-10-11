import { AppHeader } from '@/components/todoklikkers/app-header'
import { StreamingsRow } from '@/components/todoklikkers/streamings-row'
import { FeedPost, type Post } from '@/components/todoklikkers/feed-post'
import { BottomNav } from '@/components/todoklikkers/bottom-nav'

const posts: Post[] = [
  {
    name: 'Paloma Rincón',
    handle: '@princon',
    avatar: '/figma/avatar-paloma.png',
    image: '/figma/post-1.png',
    slides: 4,
    currentSlide: 0,
  },
  {
    name: 'Ricardo Vega',
    handle: '@richvega',
    avatar: '/figma/avatar-ricardo.png',
    image: '/figma/stream-3.png',
    slides: 4,
    currentSlide: 0,
    coins: [
      { icon: 'coin', value: '100' },
      { icon: 'coin', value: '120' },
    ],
    caption: {
      username: 'Username',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    },
    timeAgo: '10 minutes ago',
  },
]

export default function Page() {
  return (
    <div >
      <div >
        {/* Main Content Area (Feed) */}
        <div >
          <AppHeader />
          <main>
            <StreamingsRow />
            <div >
            <div >
              {posts.map((post, i) => (
                <FeedPost key={i} post={post} />
              ))}
            </div>
          </main>
          <BottomNav />
        </div>
        {/* Sidebar/Secondary Content Area (Placeholder for desktop) */}
        <div >
          {/* Sticky sidebar content */}
          <div >
            {/* User Profile Widget */}
            <div >
              <img src="/figma/avatar-user.png" alt="User Avatar" />
              <h3 class="text-xl font-bold mb-1">Your Name</h3>
              <p>@yourhandle</p>
              <button>
                Edit Profile
              </button>
            </div>
            {/* Trending Topics Widget */}
            <div >
              <h3 className="text-xl font-bold mb-4">Trending</h3>
              <ul className="space-y-2">
                <li className="cursor-pointer hover:text-blue-500 transition duration-150 flex justify-between items-center">
                  <span>#design</span>
                  <span className="text-xs text-gray-500">1.2k</span>
                </li>
                <li className="cursor-pointer hover:text-blue-500 transition duration-150 flex justify-between items-center">
                  <span>#webdev</span>
                  <span className="text-xs text-gray-500">890</span>
                </li>
                <li className="cursor-pointer hover:text-blue-500 transition duration-150 flex justify-between items-center">
                  <span>#figma</span>
                  <span className="text-xs text-gray-500">5.1k</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}