
using Test
using Test: @testset, @test

using Base.Iterators
using Bijectors
using DiffResults
using Distributions
using FillArrays
using LinearAlgebra
using LogDensityProblems
using Optimisers
using PDMats
using Pkg
using Random, StableRNGs
using Statistics
using StatsBase

using Functors
using DistributionsAD
@functor TuringDiagMvNormal

using ADTypes
using ForwardDiff, ReverseDiff, Zygote, Mooncake, Enzyme

using AdvancedVI

const GROUP = get(ENV, "GROUP", "All")

# Models for Inference Tests
struct TestModel{M,L,S,SC}
    model::M
    μ_true::L
    L_true::S
    n_dims::Int
    strong_convexity::SC
    is_meanfield::Bool
end
include("models/normal.jl")
include("models/normallognormal.jl")

# Tests
if GROUP == "All" || GROUP == "Interface"
    include("interface/ad.jl")
    include("interface/optimize.jl")
    include("interface/repgradelbo.jl")
    include("interface/scoregradelbo.jl")
    include("interface/rules.jl")
    include("interface/averaging.jl")
end

if GROUP == "All" || GROUP == "Families"
    include("families/location_scale.jl")
    include("families/location_scale_low_rank.jl")
end

const PROGRESS = haskey(ENV, "PROGRESS")

if GROUP == "All" || GROUP == "Inference"
    include("inference/repgradelbo_distributionsad.jl")
    include("inference/repgradelbo_locationscale.jl")
    include("inference/repgradelbo_locationscale_bijectors.jl")
    include("inference/scoregradelbo_distributionsad.jl")
    include("inference/scoregradelbo_locationscale.jl")
    include("inference/scoregradelbo_locationscale_bijectors.jl")
end
