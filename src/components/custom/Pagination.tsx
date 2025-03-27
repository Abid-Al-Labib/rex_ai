import React from 'react';
import { Button } from '@/components/ui/button';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-1 my-6">
      <Button variant="outline" size="sm">Previous</Button>
      
      {/* Page Numbers */}
      <Button variant="outline" size="sm">1</Button>
      <Button variant="outline" size="sm">2</Button>
      <Button variant="outline" size="sm">3</Button>
      <Button variant="outline" size="sm">4</Button>
      <Button variant="outline" size="sm">5</Button>

      <Button variant="outline" size="sm">Next</Button>
    </div>
  );
};

export default Pagination;
