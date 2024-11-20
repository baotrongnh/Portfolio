import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const skills = ["ReactJS", "NodeJS", "TypeScript", "HTML", "CSS", "MongoDB"];

const MatterSkills: React.FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Tạo engine và render
        const engine = Matter.Engine.create();
        const render = Matter.Render.create({
            element: sceneRef.current as HTMLDivElement,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                wireframes: false,
                background: "#f5f5f5",
            },
        });

        const wallThickness = 100;

        // Thêm tường bảo vệ
        const walls = [
            Matter.Bodies.rectangle(400, -wallThickness / 2, 800, wallThickness, { isStatic: true }),
            Matter.Bodies.rectangle(400, 600 + wallThickness / 2, 800, wallThickness, { isStatic: true }),
            Matter.Bodies.rectangle(-wallThickness / 2, 300, wallThickness, 600, { isStatic: true }),
            Matter.Bodies.rectangle(800 + wallThickness / 2, 300, wallThickness, 600, { isStatic: true }),
        ];

        Matter.World.add(engine.world, walls);

        // Tạo các khối kỹ năng
        const skillBlocks = skills.map((skill, index) => {
            const x = 200 + index * 100;
            const y = 100 + Math.random() * 200;

            return Matter.Bodies.rectangle(x, y, 150, 50, {
                restitution: 0.8,
                friction: 0.5,
                render: {
                    fillStyle: "white",
                    strokeStyle: "black",
                    lineWidth: 2,
                },
                label: skill,
            });
        });

        Matter.World.add(engine.world, skillBlocks);

        // Thêm chuột để tương tác
        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false },
            },
        });

        Matter.World.add(engine.world, mouseConstraint);

        // Xử lý cuộn khi vuốt
        let touchStart: TouchEvent | null = null;

        mouseConstraint.mouse.element.addEventListener("touchstart", (event) => {
            if (!mouseConstraint.body) {
                touchStart = event;
            }
        });

        mouseConstraint.mouse.element.addEventListener("touchend", (event) => {
            if (!mouseConstraint.body && touchStart) {
                const startY = touchStart.changedTouches[0].clientY;
                const endY = event.changedTouches[0].clientY;
                const delta = Math.abs(startY - endY);

                if (delta > 80) {
                    // Thực hiện cuộn
                    window.scrollTo({
                        top: window.scrollY + (startY > endY ? 600 : -600),
                        behavior: "smooth",
                    });
                }

                touchStart = null;
            }
        });

        // Vẽ chữ trong các khối kỹ năng
        Matter.Events.on(render, "afterRender", () => {
            const ctx = render.context;
            ctx.font = "16px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            skillBlocks.forEach((block) => {
                const { x, y } = block.position;
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(block.angle);
                ctx.fillText(block.label, 0, 0);
                ctx.restore();
            });
        });

        // Sử dụng Matter.Runner để chạy engine
        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);
        Matter.Render.run(render);

        // Dọn dẹp khi component bị unmount
        return () => {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            Matter.Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    return (
        <div
            ref={sceneRef}
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden", // Đảm bảo canvas nằm gọn trong container
            }}
        />
    );
};

export default MatterSkills;
