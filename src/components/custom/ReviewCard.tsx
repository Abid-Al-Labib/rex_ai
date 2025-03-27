import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  profileImg?: string;
  time: string;
  rating: number;
  reviewType: 'Positive' | 'Negative' | 'Neutral';
  status: 'Pending' | 'Approved' | 'Rejected';
  reviewBody: string;
  suggestedReply?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  profileImg,
  time,
  rating,
  reviewType,
  status,
  reviewBody,
  suggestedReply,
}) => {
  return (
    <Card className="relative">
      <CardHeader className="flex flex-row justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            src={profileImg || '/default-avatar.png'}
            alt="profile"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-gray-500">{time}</p>
          </div>
        </div>

        <div className="text-right">
          <Badge variant="outline" className="mb-1">
            {status}
          </Badge>
          <Badge
            variant={reviewType === 'Positive' ? 'default' : reviewType === 'Negative' ? 'destructive' : 'secondary'}
          >
            {reviewType}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-2">
        {/* Star Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating ? 'currentColor' : 'none'}
              className="text-yellow-400"
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="mb-4">{reviewBody}</p>

        {/* Suggested Reply Box */}
        {suggestedReply && (
          <div className="bg-gray-100 p-3 rounded-md mb-4">
            <p className="text-sm font-medium">Suggested Reply:</p>
            <p className="italic text-sm">{suggestedReply}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button size="sm">Approve</Button>
          <Button size="sm" variant="outline">
            Edit
          </Button>
          <Button size="sm" variant="destructive">
            Reject
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
