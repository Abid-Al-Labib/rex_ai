import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SearchBar = () => {
  return (
    <div className="flex gap-2">
      {/* Text input for search query */}
      <Input placeholder="Search reviews..." />

      {/* Dropdown 1 */}
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Ratings</SelectItem>
          <SelectItem value="5">5 Stars</SelectItem>
          <SelectItem value="4">4 Stars</SelectItem>
          <SelectItem value="3">3 Stars</SelectItem>
          <SelectItem value="2">2 Stars</SelectItem>
          <SelectItem value="1">1 Star</SelectItem>
        </SelectContent>
      </Select>

      {/* Dropdown 2 */}
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Dates</SelectItem>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="oldest">Oldest First</SelectItem>
        </SelectContent>
      </Select>

      {/* Dropdown 3 */}
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Review Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="positive">Positive</SelectItem>
          <SelectItem value="negative">Negative</SelectItem>
          <SelectItem value="neutral">Neutral</SelectItem>
        </SelectContent>
      </Select>

      {/* Apply Filter Button */}
      <Button>Apply Filter</Button>
    </div>
  );
};

export default SearchBar;
