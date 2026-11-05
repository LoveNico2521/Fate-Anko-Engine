@keyframes pulse-glow-green {
    0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
    70% { box-shadow: 0 0 10px 10px rgba(16, 185, 129, 0); }
    100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}
.glow-cs { animation: pulse-glow-green 1s ease-out; }
/* 同理写 glow-cf (red) 和 glow-s3 (purple) */