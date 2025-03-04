import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { StatsRingCard } from './StatsRingCard';

export default { title: 'StatsRingCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={StatsRingCard} />;
}
