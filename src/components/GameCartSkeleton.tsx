import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCartSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden" width={300}>
      <Skeleton height={200} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCartSkeleton;
