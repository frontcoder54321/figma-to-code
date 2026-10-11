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
    <div className="flex min-h-screen justify-center bg-[#eceef0] p-4 sm:p-6 lg:p-10">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row lg:gap-8 bg-[#fefefe] shadow-sm">
        {/* Main Content Area (Feed) */}
        <div className="lg:w-3/4 flex flex-col">
          <AppHeader />
          <main className="flex-1">
            <StreamingsRow />
            <div className="h-2 bg-[#f3f4f5]" />
            <div className="flex flex-col divide-y divide-[#f3f4f5]">
              {posts.map((post, i) => (
                <FeedPost key={i} post={post} />
              ))}
            </div>
          </main>
          <BottomNav />
        </div>
        {/* Sidebar/Secondary Content Area (Placeholder for desktop) */}
        <div className="lg:w-1/4 p-4 lg:p-0">
          {/* Sticky sidebar content */}
          <div className="sticky top-4 space-y-6">
            {/* User Profile Widget */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <img src="/figma/avatar-user.png" alt="User Avatar" className="w-20 h-20 rounded-full mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-1">Your Name</h3>
              <p className="text-sm text-gray-500 mb-3">@yourhandle</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition">
                Edit Profile
              </button>
            </div>
            {/* Trending Topics Widget */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
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