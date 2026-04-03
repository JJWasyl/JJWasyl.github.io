---
layout: post
title: Bubble factory vertical slice part 2, UI and buildings
date: 2025-07-21 12:00:00
description: Creating a UI for the vertical slice and setting up buildings
tags: project bubble-factory slice UI
categories: game-devlog
---

# Devlog #3 - Setting up simple UI for the vertical slice / Wrapup

## Project refactor, integrating cursor

I've started out by switching to using cursor for faster AI assistance and better control over context.
Refactoring consisted of mostly breaking up the big project files into smaller classes helping with modularity, especially in case I need the scripts for context in AI use.
---

## Setting up basic UI

To avoid memorizing shortcuts for everything and this being a web friendly game, I've decided to work on setting up a simple UI for the game.
That way any future core gameplay feature will also immediately be reflected in the UI.
1. Buttons for building manipulation
1. Building selection buttons (with a couple extra primitive building types)
1. Using scriptable objects for building types and grid configuration for future levels.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bubble_factory/progress_materials/building_types.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Now we have factories and pipelines!
</div>
---

## Trouble with model highlighting and unintended bloat

#### Problem
I've encountered a problem with proper model highlighting after importing the first model asset into the game. 
The color material swap that worked for primitive shapes didn't apply to the complex model and ended up leading down a rabbit hole of me trying to fix the issue through code.
The project is now slightly bloated with unusable material swap code that needs to be thrown out. This should help with rendering speed.

#### Solution
I've replaced model highlighting with shaders instead. It is the actually preferred method for that sort of action.
The next step will start with a short refactor of the existing codebase to remove highlighting followed by creating a shader-based solution.

---

## Further Ideas for next steps
### Core level design

To inform further exploration, I need to nail down the design of the first few levels, the kind of puzzles the player could solve. This also includes implementing:
1. A level system
1. Level win conditions
1. A pause menu
1. A main menu

### Optimization concerns
Up to now, whenever we mouse over from cell to cell, the previews are cleaned from the entire board. This was necessary to counteract a bug where previews or highlights would persist on the board after being hit by a Raycast.
TODO: Research a better cleanup mechanic than cleaning the whole board on every highlight block move.

```c#
public void HidePreview()
{
    if (previewManager != null)
    {
        previewManager.HidePreview();
    }
    // Reset all cell highlights to default
    for (int x = 0; x < gridManager.gridSettings.gridSizeX; x++)
    {
        for (int y = 0; y < gridManager.gridSettings.gridSizeY; y++)
        {
            GameObject cellObject = gridManager.gridCells[x, y];
            Cell cell = cellObject.GetComponent<Cell>();
            if (cell != null)
            {
                cell.Highlight(null);
            }
        }
    }
}
```

### Defining More building types

To support the logic for the first few levels. I need at least 5-6 building types. I'm leaning to design the game with logic puzzles in mind centered around the efficient combination of producing, refining and outputting buildings.
To that end, the basic building ideas include:
- A bubble refinery
- Pipelines, including T and X shaped variants, pipelines change based on transported fluid type.
- A water extractor
- A soap factory

Then we can explore fun puzzle-like buildings in the future:
- Bubble re-shaper
- Soap variations for bubble color
- A wind powered bubble dispenser


## Project Wrap-up
I've decided to stop working on this project in its current state. I've learned a great deal about cell and coordinate management for future ideas. However at this stage I feel like a major refactor would be necessary to cleanup some of my messes.
