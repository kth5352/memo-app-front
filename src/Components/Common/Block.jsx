import React, { useState, useEffect, useRef } from "react";

const Block = ({ block, allBlocks, updateBlock, addBlock, deleteBlock }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(block.content);
    const textareaRef = useRef(null);

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleBlur = () => {
        updateBlock({ ...block, content });
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleBlur();
            addBlock(block.id);
        }
    };

    useEffect(() => {
        if (isEditing && textareaRef.current) {
            adjustTextareaHeight();
        }
    }, [content, isEditing]);

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        const newHeight = Math.max(textarea.scrollHeight, 24); // 최소 높이를 24px로 설정
        textarea.style.height = `${newHeight}px`;
    };

    const childBlocks = block.children
        .map((childId) => allBlocks.find((b) => b.id === childId))
        .filter(Boolean);

    const textareaStyle = {
        width: "100%",
        resize: "none",
        overflow: "hidden",
        minHeight: "24px",
        border: "none",
        outline: "none",
        fontFamily: "inherit",
        fontSize: "inherit",
        lineHeight: "24px",
        padding: "0 4px",
        boxSizing: "border-box",
        display: "block",
    };

    return (
        <div className="block">
            {isEditing ? (
                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={handleContentChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    style={textareaStyle}
                />
            ) : (
                <div onClick={() => setIsEditing(true)}>{block.content}</div>
            )}
            {/* <button onClick={() => addBlock(block.id)}>Add Block</button> */}
            <button onClick={() => deleteBlock(block.id)}>Delete Block</button>
            {childBlocks.map((childBlock) => (
                <Block
                    key={childBlock.id}
                    block={childBlock}
                    allBlocks={allBlocks}
                    updateBlock={updateBlock}
                    addBlock={addBlock}
                    deleteBlock={deleteBlock}
                />
            ))}
        </div>
    );
};

export default Block;
