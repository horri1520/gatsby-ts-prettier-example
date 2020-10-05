import React, { useState } from 'react';
import PageRoot from '../components/templates/page-root';
import '../styles/styles.css';
import judgeAgent from '../tools/judge-agent';
import onServerSideRendering from '../tools/judge-ssr';
import devices from '../types/devices';

const PostsPage: React.FC = () => {
  const [agent, setAgent] = useState<devices>(judgeAgent());

  if (!onServerSideRendering) {
    window.onresize = () => {
      const currentAgent = judgeAgent();
      if (agent !== currentAgent) {
        setAgent(currentAgent);
      }
    };
  }

  return (
    <PageRoot agent={agent}>
      <h1>PostsPage</h1>
    </PageRoot>
  );
};

export default PostsPage;
