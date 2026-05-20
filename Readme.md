# Blender Tutorial 📚

## ✅ Keyboard Shortcuts 

<div>
    <img src="Images/Slide 1.png" alt="slide1" alt="slide1">
    <img src="Images/Slide 2.png" alt="slide2" alt="slide2">
    <img src="Images/Slide 3.png" alt="slide3" alt="slide3">
    <img src="Images/Slide 4.png" alt="slide4" alt="slide4">
    <img src="Images/Slide 5.png" alt="slide5" alt="slide5">
    <img src="Images/Slide 6.png" alt="slide6" alt="slide6">
    <img src="Images/Slide 7.png" alt="slide7" alt="slide7">
    <img src="Images/Slide 8.png" alt="slide8" alt="slide8">
    <img src="Images/Slide 9.png" alt="slide9" alt="slide9">
    <img src="Images/Slide 10.png" alt="slide10" alt="slide10">
    <img src="Images/Slide 11.png" alt="slide11" alt="slide11">
    <img src="Images/Slide 12.png" alt="slide12" alt="slide12">
    <img src="Images/Slide 13.png" alt="slide13" alt="slide13">
    <img src="Images/Slide 14.png" alt="slide14" alt="slide14">
    <img src="Images/Slide 15.png" alt="slide15" alt="slide15">
</div>

### **General Viewport & Interface**
*   **Q**: Opens the Quick Favorites menu.
*   **N**: Toggles the sidebar (N-panel).
*   **T**: Toggles the toolbar.
*   **Z**: Brings up the viewport shading pie menu. If "extra shading pie menu items" are enabled in preferences, swiping up toggles Overlays and swiping down toggles X-Ray.
*   **Alt + Z**: Toggles X-Ray mode on/off.
*   **Alt + B**: Masks a specific portion of the viewport (draw a box to hide the rest). Press **Alt + M** or **Alt + B** to clear it (the transcript mentions both for clearing masks).
*   **Ctrl + Spacebar**: Maximizes the current viewport.
*   **Numpad 3**: Switches to the right orthographic side view.
*   **Numpad 0**: Switches to the active Camera view.
*   **/ (Numpad Slash)**: Isolates the selected object (Local View).
*   **. (Numpad Period)**: Focuses the camera on the selected object.
*   **. (Keyboard Period)**: Brings up the Pivot Point pie menu.
*   **H**: Hides the selected object or geometry.
*   **Shift + H**: Hides everything else *except* the selected object/geometry.
*   **Alt + H**: Unhides everything.
*   **Shift + S**: Opens the Snap menu (e.g., to move "Cursor to Selected" or "Selection to Cursor").
*   **Ctrl + Z**: Undoes your previous action.
*   **Shift + R**: Repeats your last action.

### **Object Mode**
*   **Shift + A**: Opens the Add menu (to add meshes, curves, lights, etc.).
*   **G**: Grabs/Moves the object.
*   **S**: Scales the object. Press **X, Y, or Z** after to lock scaling to a specific axis.
*   **S + Z + 0**: Scales to 0 on the Z-axis (flattens the object/vertices on that axis).
*   **R**: Rotates the object. Pressing **R twice** activates free trackball rotation.
*   **Shift + D**: Duplicates the object.
*   **Alt + D**: Creates a linked duplicate (shares the same object data, so editing one edits both).
*   **Ctrl + A**: Opens the Apply menu (used to apply all transforms, apply scale, or apply "Visual Geometry to Mesh").
*   **Ctrl + G**: Joins selected objects together *(Note: The standard Blender shortcut for joining is Ctrl + J, but the transcript explicitly notes using Ctrl + G to join objects)*.
*   **Ctrl + P**: Opens the Parent menu (used to parent objects, bind rigs with automatic weights, or empty groups).
*   **M**: Moves the selected object to a collection.
*   **C (in Outliner)**: Creates a new collection.
*   **Ctrl + F2**: Opens the Batch Rename menu.

### **Edit Mode**
*   **Tab**: Toggles into Edit Mode.
*   **A**: Selects all.
*   **Alt + A**: Deselects all.
*   **Ctrl + I**: Inverts your current selection.
*   **L**: Selects all linked geometry under your cursor.
*   **Ctrl + Numpad +**: Grows your selection.
*   **Ctrl + Numpad -**: Shrinks your selection.
*   **E**: Extrudes geometry.
*   **I**: Insets faces. Press **B** during inset to make it stick to the mirror boundary.
*   **F**: Creates a new face or edge from the selected vertices.
*   **Ctrl + R**: Adds a loop cut.
*   **M**: Opens the Merge menu (e.g., to merge vertices at the center).
*   **Ctrl + X**: Dissolves selected vertices or edges without deleting the face.
*   **X**: Opens the Delete menu.
*   **Ctrl + B**: Bevels edges or vertices.
*   **G twice (G G)**: Edge slide or vertex slide.
*   **Alt + S**: Scales along normals (Shrinks/Fattens).
*   **Ctrl + F**: Opens the Face menu (used for Grid Fill).
*   **V**: Rips vertices or edges apart.
*   **Shift + N**: Recalculates normals to fix shading issues.
*   **Ctrl + Shift + M**: Mirrors your selection over to the other side.
*   **Ctrl + E**: Opens the Edge menu (e.g., to mark seams or bridge edge loops).

### **Sculpt Mode / Hair Grooming**
*   **G**: Grab brush.
*   **Shift + C**: Crease Polish brush.
*   **Shift + T**: Scrape/Flatten brush *(The transcript captions call this the "Script brush")*.
*   **I**: Inflate brush.
*   **V**: Draw brush.
*   **C**: Clay Strips brush *(The transcript captions call this the "Cliches" or "Clay Shoes" brush)*.
*   **Shift + Spacebar**: Brings up the brush search/menu (used to find the Relax Slide brush).
*   **Shift (Hold)**: Temporarily activates the Smooth brush to soften geometry or hair.
*   **Ctrl (Hold)**: Inverts the current brush's effect (e.g., digging in instead of building up, or shrinking hair instead of growing).
*   **F**: Flips the slice direction when using the Line Project brush.
*   **Alt + Q**: Switches the active object while remaining in Sculpt Mode.
*   **Ctrl + R**: Remeshes the sculpt based on your voxel size.
*   **Alt + M**: Clears your current mask.
*   **Shift + A**: Grows a mask starting from the cursor position.
*   **W**: Custom shortcut assigned in the tutorial for the Selection brush (used when grooming hair curves).

### **UV Editing & Texture Paint Modes**
*   **U**: Opens the UV unwrap menu (e.g., to "Unwrap with minimum stretching").
*   **Ctrl + E**: Marks Seams or Clears Seams.
*   **P**: Pins a vertex in the UV editor.
*   **Alt + P**: Unpins vertices in the UV editor.
*   **Alt + S**: Saves the image texture in the Image Editor (blender does not autosave texture paints).
*   **X**: Switches between primary and secondary (white/black) colors while texture painting.

### **Pose Mode**
*   **Ctrl + Tab**: Toggles between Object Mode and Pose Mode / Weight Paint Mode.
*   **Alt + R**: Clears any rotations applied to a bone, resetting it to its rest pose.
*   **Alt + G**: Clears any location changes applied to a bone.
*   **Alt + S**: Clears any scaling applied to a bone.
*   **Ctrl + R**: Rolls the bone to change its axis orientation.

### **Shader Editor (Requires Node Wrangler Add-on)**
*   **Ctrl + Shift + Left Click**: Previews the selected node directly on the model.
*   **Ctrl + T**: Automatically adds a Texture Coordinate and Mapping node to the selected texture node.

### **Timeline & Animation**
*   **Ctrl + B (hovering over timeline)**: Binds the active camera to the selected timeline frame marker (useful for switching cameras mid-animation).
*   **Shift + Right Arrow**: Jumps to the last frame in your timeline.
*   **K**: Inserts an animation keyframe *(Note: The standard Blender shortcut for keyframes is I, but the transcript specifically references K)*.