// Copyright (c) Microsoft Corporation.  All rights reserved.

import "scripts/AllayTests.js";
import "scripts/APITests.js";
import "scripts/BlockEventTests.js";
import "scripts/BlockTests.js";
import "scripts/ComponentTests.js";
import "scripts/CommandTests.js";
import "scripts/DebugTests.js";
import "scripts/DispenserTests.js";
import "scripts/DoorTests.js";
import "scripts/DripstoneTests.js";
import "scripts/DuplicationTests.js";
import "scripts/EntityQueryTests.js";
import "scripts/EntityTests.js";
import "scripts/ExtensionTests.js";
import "scripts/FireAvoidTests.js";
import "scripts/FrogTests.js";
import "scripts/GameTestExtensions.js";
import "scripts/MinecartTests.js";
import "scripts/MobTests.js";
import "scripts/MultifaceTests.js";
import "scripts/PathFindingTests.js";
import "scripts/FlyingMachineTests.js";
import "scripts/PistonTests.js";
import "scripts/TntTests.js";
import "scripts/WaterPathfindingTests.js";
import "scripts/WardenTests.js";
import "scripts/SmallMobTests.js";
import "scripts/BigMobTests.js";
import "scripts/RaycastingTests.js";
import "scripts/RedstoneTests.js";
import "scripts/SimulatedPlayerTests.js";
import "scripts/RespawnAnchorTests.js";
import "scripts/PlaceSeedsTests.js";
import "scripts/ItemTests.js";
import "scripts/ItemEnchantmentsTests.js";
import "scripts/SculkTests.js";
import "scripts/VibrationTests.js";
import "scripts/EnchantmentTests.js";

import { system } from "mojang-minecraft";
system.events.beforeWatchdogTerminate.subscribe((e) => {
  e.cancel = true;
});
