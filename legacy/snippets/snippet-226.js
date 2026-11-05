    /* 保留最基本的翻滾動畫 */
    @keyframes roll3d {
      0% { transform: rotateX(0deg) rotateY(0deg) scale(0.9); opacity: 0.6; }
      50% { transform: rotateX(360deg) rotateY(180deg) scale(1.05); opacity: 0.95; }
      100% { transform: rotateX(720deg) rotateY(360deg) scale(1); opacity: 1; }
    }
    .animate-roll { animation: roll3d 0.35s ease-out; }