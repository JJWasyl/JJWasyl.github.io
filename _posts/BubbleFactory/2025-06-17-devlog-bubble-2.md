---
layout: post
title: Bubble factory vertical slice
date: 2025-06-17 12:00:00
description: Building vertical slice for the basic game area
tags: project bubble-factory slice
categories: game-devlog
---

# Devlog #2 - Creating the vertical Slice for Bubble Factory
---

## Building the main game grid

Before diving into the puzzle / strategy design, I need to assess how well I can build a grid based builder game. I'm using Grok for bootstrapping and learning as I go. I've started with `GridManager`, `Cell`, `CellHighlighter` and `PlayerController` scripts to build a 10x10 grid system which allows highlighting of cells the mouse is hovering over.


A pretty annoying obstacle was a common Unity race issue between Start() and Awake() scripts on the Grid Manager and Cell class themselves. I'd assign a default material to the cell at Start(), however that material would be overridden due to an awake routine on the cell that'd override that with a default "lit" render. This would cause a path to reveal itself after highlighting cells on the grid.


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bubble_factory/progress_materials/grid_highlight_problem.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Unwanted material override to a default "lit" pattern causes a streak of highlighted cells. Fixed by moving material logic out of the `Awake()` method.
</div>

The grid is satisfying enough for now. It is also built to generate custom sizes for future levels. It is time to move on to creating some buildings to place on the grid.

---

## Building handling

The game will revolve around placing, moving and removing buildings on the grid. Only one building can occupy a slot and there will be adjacency mechanics between the buildings. For now let's focus on the basics. 
1. Creating a basic building and allowing placement and removal from our grid.
1. Moving an existing building by clicking it and a destination grid position.
1. Adding a building "preview" animation for placement (creating and moving).
1. Coloring grid positions for different building operations.
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bubble_factory/progress_materials/building_placement.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bubble_factory/progress_materials/grid_tracking.gif" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bubble_factory/progress_materials/building_manipulation.gif" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bubble_factory/progress_materials/building_manipulation_2.gif" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Roughing out the building components over many iterations
</div>
---

## Thoughts on AI use with this task

AI was a force multiplier in getting this prototype up and running in just a couple of hours. It is a solid crutch that makes up for my inexperience, though I began noticing its limits as it would run in circles trying to squash some annoying bugs (like building highlighting). I can't deny however, that it drastically cut down prototyping time with my limited experience with Unity.

Dashing ahead through vibe-coding also has this disadvantage that I'm putting on some technical debt in terms of code efficiency. While not an issue with a game this small in scope, I intend to make some refactor attempts to examine the efficiency of some functions as well as apply better polymorphism.

*Jakub Wasylkowski*