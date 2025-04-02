import StatsCard from "@/components/custom/StatsCard"
import SearchBar from "@/components/custom/SearchBar"
import ReviewCard from "@/components/custom/ReviewCard"
import Pagination from "@/components/custom/Pagination"
import Sidebar from "@/components/custom/Sidebar"
import TopBar from "@/components/custom/TopBar"
import { useEffect, useState } from "react"
import { get_reviews } from "@/services/ReviewService"
import { ToastContainer, toast } from 'react-toastify';
import { Review } from "@/types/types"
import { convertUtcToEasterTime } from "@/services/Helper"


const HomePage = () => {
  
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingReviews, setLoadingReviews] = useState<boolean>(false)

  const handleGetReview = async () => {
    try {
        const reviews = await get_reviews();  // Await the result from get_reviews
        if (reviews)
        {
          setReviews(reviews)
        }
        else
        {
          toast.error('Failed to fetch reviews')
        }
    } catch (error) {
        console.error('Error in handlegetreview:', error);  // Handle any error
    }
  };

  useEffect(() => {
    setLoadingReviews(true)
    handleGetReview()
    setLoadingReviews(false)
  }, [])
  

  return (
    <div className="flex flex-col h-screen">

      {/* TopBar at the top */}
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex gap-2 mt-2">
            <StatsCard description={"Total Revenue"} value={200}/>
            <StatsCard description={"Bad reviews"} value={100}/>
            <StatsCard description={"Good Reviews"} value={10}/>
            <StatsCard description={"Sales"} value={1100}/>
          </div>
          
          {/* Search Bar Component */}
          <div className="mt-4">
            <SearchBar />
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              reviews.map((review) => (
                  <ReviewCard
                    name={review.author_name || '-'}
                    profileImg="/avatar-placeholder.jpg"
                    time={review.review_published_at? convertUtcToEasterTime(review.review_published_at): '-'}
                    rating={Number(review.rating)}
                    reviewType={review.sentiment  || '-'}
                    status="Approved"
                    reviewBody={review.review_text || '-'}
                    suggestedReply={review.ai_generated_reply || '-'}
                  />
              ))  
            }
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
